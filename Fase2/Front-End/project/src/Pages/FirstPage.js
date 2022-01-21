import React from 'react'
import { Link } from 'react-router-dom';

import '../CSS/FirstPage.css';

function FirstPage(){

    return(

    <div>
        <img src="../logo.png" alt="" id="firstImg"/>
        <br /><br /><br /><br /><br />

        <Link to='/LoginUser' className='botton'>Sou cliente</Link>
        <Link to='/LoginOwner' className='botton'>Sou proprietario</Link>
        <Link to='/LoginAdmistrador' className='botton'>Sou admistrador</Link>

    </div>
    );


}

export default FirstPage;