package com.grupo4.li4.services;

import com.grupo4.li4.model.*;
import com.grupo4.li4.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AppService {

    @Autowired
    private ClienteRepo clienteRepo;

    @Autowired
    private RestauranteRepo restauranteRepo;

    @Autowired
    private ProprietarioRepo proprietarioRepo;

    @Autowired
    private AvaliacaoRepo avaliacaoRepo;

    @Autowired
    private PratoRepo pratoRepo;

    @Autowired
    private ReservaRepo reservaRepo;


    public boolean loginCliente(LoginForm lf){
        if(clienteRepo.encontraPorEmail(lf.getEmail()) == null) return false;
        else return clienteRepo.encontraPorEmail(lf.getEmail()).
                                getPalavra_passe().
                                equals(lf.getPalavra_passe());
    }

    public void registar(Cliente cliente){

        clienteRepo.save(cliente);
    }


    public void atualizarDados(AtualizarDadosForm form, String email){
        String nome = form.getNome();
        String nome_utilizador = form.getNome_utilizador();
        String palavra_passe = form.getPalavra_passe();
        String num_telemovel = form.getNum_telemovel();
        String palavra_passe_antiga = form.getPalavra_passe_antiga();
        String novo_raio = form.getRaio_distancia();


        Cliente c = clienteRepo.encontraPorEmail(email);
        if(palavra_passe_antiga.equals(c.getPalavra_passe())){
            if(!nome.equals("")) c.setNome(nome);
            if(!nome_utilizador.equals("")) c.setNome_utilizador(nome_utilizador);
            if(!palavra_passe.equals("")) c.setPalavra_passe(palavra_passe);
            if(!num_telemovel.equals("")) c.setNum_telemovel(Integer.parseInt(num_telemovel));
            if(!novo_raio.equals("")) c.setFiltro_distancia(Integer.parseInt(novo_raio));
            clienteRepo.save(c);
        }
    }

    public void registarProprietario(Proprietario proprietario){
        System.out.println(proprietario.getEmail());
        System.out.println(proprietario.getNif());
        this.proprietarioRepo.save(proprietario);
    }


    public void registarRestaurante(Restaurante restaurante, String email){
        Proprietario p = proprietarioRepo.encontraPorEmail(email);
        restaurante.setProprietario(p);
        restauranteRepo.save(restaurante);
    }

    public boolean loginProprietario(LoginForm loginForm){
        if(proprietarioRepo.encontraPorEmail(loginForm.getEmail()) == null) return false;
        else return (proprietarioRepo.encontraPorEmail(loginForm.getEmail())
                                     .getPassword()
                                     .equals(loginForm.getPalavra_passe()));
    }

    public Restaurante obtemInfoRestaurante(String nome){
        Restaurante r = restauranteRepo.getById(nome);
        return new Restaurante(r.getNome(), r.getRua(), r.getLocalidade(), r.getNum_telefone(), r.getHorario());
    }

    public Cliente obtemInfoCliente(String email){
        return this.clienteRepo.encontraPorEmail(email);
    }

    public Restaurante obtemRestaurante(String nome, String email){
        return this.proprietarioRepo.encontraPorEmail(email).getRestauranteNome(nome);
    }

    public void avaliacao(AvaliacaoForm form, String email){
        Cliente c = this.clienteRepo.encontraPorEmail(email);
        Restaurante r = this.restauranteRepo.getById(form.getNome_restaurante());
        Avaliacao a = new Avaliacao(Integer.parseInt(form.getEstrelas()), form.getComentario(),r,c);
        this.avaliacaoRepo.save(a);
    }

    public List<Restaurante> obterRestaurantesProprietario(String email){
        Proprietario p = this.proprietarioRepo.encontraPorEmail(email);
        return p.getRestaurantes();
    }

    public void inserirPrato(String nome, Float preco, String nome_restaurante, String email){
        Prato p = new Prato(nome, preco);
        this.pratoRepo.save(p);
        Restaurante r = this.restauranteRepo.getById(nome_restaurante);
        r.addPrato(p);
        this.restauranteRepo.save(r);
    }

    public void teste(){
    }

    public void removerRestaurante(String nome){
        this.restauranteRepo.deleteById(nome);
    }

    public void criarReserva(Date data, int num_pessoal, String nome_restaurante, List<String> pratos, String email){
        Restaurante r = this.restauranteRepo.getById(nome_restaurante);
        Cliente c = this.clienteRepo.encontraPorEmail(email);
        List<Prato> pratos_reserva = new ArrayList<>();
        List<Prato> aux = r.getPratos();
        for(int i = 0; i < pratos.size(); i++){
            for(Prato p : aux){
                if(p.getNome().equals(pratos.get(i))){
                    pratos_reserva.add(p);
                    break;
                }
            }
        }

        Reserva reserva = new Reserva(data, num_pessoal, c, r,pratos_reserva);
        this.reservaRepo.save(reserva);
    }

    public static double distance(double lat1, double lat2, double lon1,
                                  double lon2, double el1, double el2) {

        final int R = 6371; // Radius of the earth

        double latDistance = Math.toRadians(lat2 - lat1);
        double lonDistance = Math.toRadians(lon2 - lon1);
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c * 1000; // convert to meters

        double height = el1 - el2;

        distance = Math.pow(distance, 2) + Math.pow(height, 2);

        return Math.sqrt(distance);
    }

    public List<Map<String, Object>> filtra_restaurantes(double lat, double lng, String email){
        Cliente c = this.clienteRepo.encontraPorEmail(email);
        List<Restaurante> r = this.restauranteRepo.findAll();
        List<Map<String, Object>> restaurantes = new ArrayList<>();
        for(Restaurante rest : r){
            double dist = distance(lat, rest.getLatitude(), lng, rest.getLongitude(),0.0,0.0);
            System.out.println("Distance from " + rest.getNome() + ": " + dist);
            if(dist < c.getFiltro_distancia() * 1000) {
                Map<String,Object> aux = new HashMap<>();
                aux.put("nome", rest.getNome());
                aux.put("lat",rest.getLatitude());
                aux.put("lng", rest.getLongitude());
                restaurantes.add(aux);
            }
        }
        return restaurantes;
    }

    public void alterar_dados_Restaurante(Map<String, Object> input, String nome_restaurante){
        //num_telefone
        //horario
        String num_telefone = (String) input.get("num_telefone");
        String horario = (String) input.get("horario");

        Restaurante r = this.restauranteRepo.getById(nome_restaurante);
        if(!horario.equals("")) r.setHorario(horario);
        if(!num_telefone.equals("")) r.setNum_telefone(Integer.parseInt(num_telefone));

        this.restauranteRepo.save(r);
    }

}
