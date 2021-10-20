import React from 'react';

class Header extends React.Component {
    render(){
        return(
        <div >
            <a href="/">ClassRoom!</a>

            <div >
                <ul >
                    <li >
                        <a href="/">Home</a>
                    </li>
                    <li >
                        <a href="/Login">Login</a>
                    </li>
                    <li >
                        <a href="/Register">Registro</a>
                    </li>
                    <li >
                        <a href="/ListCurs">ListCurs</a>
                    </li>
                </ul>
            </div>
        </div>
    )
    }

}

export default Header;