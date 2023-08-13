export default function LogOutButton(){
    return(
        <div className="btn btn-outline-danger border-white rounded-4 w-100">
            <div className="row">
                <div className="col-6 p-2">
                    <img src='/images/profile.jpeg' className="rounded-circle float-start" alt="photo" width="50" height="50"></img>
                </div>
                <div className="col-6 p-2">
                    <h4>Luciana</h4>
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}