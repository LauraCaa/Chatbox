import Form from "./form"
export default function Chat(){
    return(
            <div className='main-font'>
                <div className="overflow-y-auto row bg-body-tertiary p-2">
                    <div className="row pt-2 justify-content-center">
                        <div className="bg-white text-center pt-1 col-2 rounded-5">
                            <p className="small">Today, Jan 30</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img src='/images/mass.png' className=" d-flex rounded-circle float-start mr-2" alt="photo" width="50" height="50"/>
                            <div className="d-flex">
                                <h6 className="mr-2">Happy</h6>
                                <p className="small pt-1">05:00 PM</p>
                            </div> 
                            <div className="ml-6 bg-white rounded-bottom rounded-end p-2">
                                <p className="small">Guyss tahun depan liburan ke Jepun!!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-1">
                        <div className="col-6">
                            <div className="ml-6 bg-white rounded-bottom rounded-end p-2">
                                <p className="small">Minta Tolong nanti dibuat pembagian tugas kaya biasa</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-2 flex-row-reverse">
                        <div className="col-6">
                            <div className="d-flex flex-row-reverse">
                                <div className="d-flex flex-row-reverse">
                                    <img src='/images/profile.jpeg' className=" d-flex rounded-circle float-start mr-2" alt="photo" width="50" height="50"/>
                                </div>
                                <div className=" d-flex flex-row-reverse">
                                    <h6 className="mr-2 ml-2">You</h6>
                                    <p className="small pt-1">05:01 PM</p>
                                </div> 
                            </div> 
                            <div className="col-auto mr-7 bg-primary rounded-bottom rounded-start p-2">
                                <p className="small text-light">Gokill!!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-6">
                            <img src='/images/rohmad.png' className="d-flex rounded-circle float-start mr-2" alt="photo" width="50" height="50"/>
                            <div className=" d-flex">
                                <h6 className="mr-2">Rohmad</h6>
                                <p className="pt-1 small">05:03 PM</p>
                            </div> 
                            <div className="ml-6 bg-white rounded-bottom rounded-end p-2">
                                <p className="small">Tenan ki???</p>
                            </div>
                        </div>    
                    </div>
                    <div className="row pt-2">
                        <div className="col-6">
                            <img src='/images/mass.png' className=" d-flex rounded-circle float-start mr-2" alt="photo" width="50" height="50"/>
                            <div className="d-flex">
                                <h6 className="mr-2">Happy</h6>
                                <p className="pt-1 ">05:04 PM</p>
                            </div> 
                            <div className="ml-6 bg-white rounded-bottom rounded-end p-2">
                                <p className="small">@Listian @Fazza @Mba Nayu</p>
                            </div>
                        </div>     
                    </div>
                    <div className="row pt-3">
                        <div className="col-6">
                            <div className="ml-6 bg-white rounded-bottom rounded-end p-2">
                                <p className="small">Mintol Cek Figma ini dong https://getbootstrap.com/docs/adcopy..</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-2 flex-row-reverse">
                        <div className="col-6">
                            <div className="d-flex flex-row-reverse">
                                <div className="d-flex flex-row-reverse">
                                    <img src='/images/profile.jpeg' className=" d-flex rounded-circle float-start mr-2" alt="photo" width="50" height="50"/>
                                </div>
                                <div className=" d-flex flex-row-reverse">
                                    <h6 className="mr-2 ml-2">You</h6>
                                    <p className="small pt-1">05:01 PM</p>
                                </div> 
                            </div> 
                            <div className="mr-7 bg-primary rounded-bottom rounded-start p-2">
                                <p className="small text-light">Wokee slap mas! utiwi cek</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Form></Form>
                </div>
            </div> 
    )
}