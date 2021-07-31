
export default function Menu(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#0e365e'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img style={{borderRadius:'50%'}} src="robot.gif" alt="robot"/> Bot Admin</a>
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
                        <div class="btn-group dropstart">
                            <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">Dropstart</button>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Perfil</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Sair</a></li>
                            </ul>
                        </div>
  
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown-user" role="button" data-bs-toggle="dropdown" aria-expanded="false">User</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown-user">
                                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Sair</a></li>
                                </ul>
                            </li>
                        </ul> */}
                        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button> */}
                        {/* <div className="nav-item dropdown" >
                            <a class="dropdown-toggle d-flex align-items-center" href="#" id="dropdown-user" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://mdbootstrap.com/img/new/avatars/2.jpg"class="rounded-circle" height="25" alt="" loading="lazy"/>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown-user">
                                <li><a className="dropdown-item" href="#">Perfil</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Sair</a></li>
                            </ul>
                        </div> */}
                        {/* <div>
                            <p>xfdjalajdffdsafsafsadfdsadfsafsaç</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}