
export default function Menu(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#0e365e', margin:'0', padding:'0'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img style={{borderRadius:'50%'}} src="robot.gif" alt="robot"/>
                     <span style={{margingTop:'-10px'}} > Bot Admin</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Bots</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Usuários</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Bot</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Configuração</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Perguntas</a></li>
                                <li><a className="dropdown-item" href="#">Respostas</a></li>
                            </ul>
                        </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                    </ul>
                    <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown-user" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     <img src="avatar.jpg"class="rounded-circle" height="38" alt="" loading="lazy"/>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown-user" style={{left: '-107px'}}>
                                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Sair</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
    
}