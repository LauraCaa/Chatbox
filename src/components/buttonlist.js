import 'bootstrap/dist/css/bootstrap.min.css';

export default function ButtonList() {
    return(
        <div class="container-fluid">
            <div class="row">
                <div>
                    <img src='/images/logo.png' width="200" height="50"/>
                </div>
                <div class="position-sticky">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <button class="nav-link btn btn-light">Dashboard</button>
                        </li>   
                        <li class="nav-item">
                            <button class="nav-link btn btn-light">Analytics</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link btn btn-light">Files</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link btn btn-light">Call</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link btn btn-light">Messages</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link btn btn-light">Community</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link btn btn-light">Settings</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}