export default function LogOutButton(){
    return(
        <div className="main-font t-color p-2 col-6 btn rounded-pill out-btn w-100">
            <img src='/images/profile.jpeg' className=" d-flex rounded-circle float-start mr-2" alt="photo" width="50" height="50"/>
            <div className="d-flex">
                <h6 className="mr-2">Fazaa</h6>
            </div>
            <div className="d-flex t-less">
                <p className="small">Logout</p>
            </div> 
        </div>
    )
}