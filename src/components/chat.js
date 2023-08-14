export default function Chat(){
    return(
            <>
                <div className="row bg-body-tertiary p-3">
                    <div className="row pt-3 justify-content-center">
                        <div className="bg-white text-center pt-2 col-2 rounded-5">
                            <p className="lead">Today, Jan 30</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img src='/images/mass.png' className=" d-flex rounded-circle float-start mr-2" alt="photo" width="50" height="50"/>
                            <div className="d-flex">
                                <h3 className="mr-2">Happy</h3>
                                <p className="pt-1 lead">05:00 PM</p>
                            </div> 
                            <div className="ml-6 bg-white rounded-bottom rounded-end">
                                <p className="lead">Guyss tahun depan liburan ke Jepun!!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="ml-6 bg-white rounded-bottom rounded-end">
                                <p className="lead">Minta Tolong nanti dibuat pembagian tugas kaya biasa</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3 flex-row-reverse">
                        <div className="col-6">
                            <div className="d-flex flex-row-reverse">
                                <div className="d-flex flex-row-reverse">
                                    <img src='/images/profile.jpeg' className=" d-flex rounded-circle float-start mr-2" alt="photo" width="50" height="50"/>
                                </div>
                                <div className=" d-flex flex-row-reverse">
                                    <h3 className="mr-2 ml-2">You</h3>
                                    <p className="lead pt-1">05:01 PM</p>
                                </div> 
                            </div> 
                            <div className="mr-7 bg-primary rounded-bottom rounded-start">
                                <p className="lead text-light">Gokill!!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-6">
                            <img src='/images/rohmad.png' className="d-flex rounded-circle float-start mr-2" alt="photo" width="50" height="50"/>
                            <div className=" d-flex">
                                <h3 className="mr-2">Rohmad</h3>
                                <p className="pt-1 lead">05:03 PM</p>
                            </div> 
                            <div className=" ml-6 bg-white rounded-bottom rounded-end">
                                <p className="lead">Tenan ki???</p>
                            </div>
                        </div>    
                    </div>
                    <div className="row pt-3">
                        <div className="col-6">
                            <img src='/images/mass.png' className=" d-flex rounded-circle float-start mr-2" alt="photo" width="50" height="50"/>
                            <div className="d-flex">
                                <h3 className="mr-2">Happy</h3>
                                <p className="pt-1 lead">05:04 PM</p>
                            </div> 
                            <div className=" ml-6 bg-white rounded-bottom rounded-end">
                                <p className="lead">@Listian @Fazza @Mba Nayu</p>
                            </div>
                        </div>     
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="ml-6 bg-white rounded-bottom rounded-end">
                                <p className="lead">Mintol Cek Figma ini dong https://getbootstrap.com/docs/adcopy..</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3 flex-row-reverse">
                        <div className="col-6">
                            <div className="d-flex flex-row-reverse">
                                <div className="d-flex flex-row-reverse">
                                    <img src='/images/profile.jpeg' className=" d-flex rounded-circle float-start mr-2" alt="photo" width="50" height="50"/>
                                </div>
                                <div className=" d-flex flex-row-reverse">
                                    <h3 className="mr-2 ml-2">You</h3>
                                    <p className="lead pt-1">05:01 PM</p>
                                </div> 
                            </div> 
                            <div className="mr-7 bg-primary rounded-bottom rounded-start">
                                <p className="lead text-light">Wokee slap mas! utiwi cek</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-top input-group input-group-lg mb-3">
                    <input type="text" className="form-control border border-white rounded-pill bg-body-tertiary pt-3" placeholder="Type a message"/>
                    <button className="btn border border-white text-secondary" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                        </svg>
                    </button>
                    <button className="btn border border-white text-secondary" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                        </svg>
                    </button>
                    <button className="btn border border-white text-secondary" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg>
                    </button> 
                </div>
        </>
         
    )
}