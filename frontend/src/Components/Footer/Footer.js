import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div >
                <ul >
                    <li >
                        <label >Sobre Nosotros</label>
                    </li>
                    <li >
                        <label >© {(new Date().getFullYear())} PreciosYa! All Right Reserved.</label>
                    </li>
                    <li >
                        <label >Email: contact@ClassRoom.com</label>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Footer;