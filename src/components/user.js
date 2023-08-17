export default function User(){
    return(
        <div className="row border-bottom"> 
            <div className="mr-2 d-flex align-items-center justify-content-between">
                <div className="col-5 mr-2">
                    <div className="pt-4 align-items-center">
                        <img src='/images/odama.png' className="mr-2 rounded-circle float-start" alt="photo" width="60" height="60"></img>
                    </div>
                    <div className="lh-1">
                        <h1 className="pt-1 h4">Odama Studio</h1>
                        <p className="small me-1 pr-2 text-success">Happy Typing...</p>
                    </div>     
                </div>
                <div className="col-3">
                    <div className="position-relative">
                        <img src='/images/nola.png' className="rounded-circle end-45" alt="photo" width="60" height="60"></img>
                        <img src='/images/listian.png' className="rounded-circle end-50" alt="photo" width="60" height="60"></img>
                        <img src='/images/rohmad.png' className="rounded-circle end-55" alt="photo" width="60" height="60"></img>
                    </div>
                </div>
                <div className="col-4 d-flex align-items-center">
                    <div className="btn rounded-circle bg-body-tertiary text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-camera-video m-2" viewBox="0 0 16 16">
                            <path fill="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
                        </svg>
                    </div>
                    <div className="btn rounded-circle bg-body-tertiary text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone m-2" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                    </div>
                    <div className="btn rounded-circle bg-body-tertiary text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots m-2" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                    </div>
                </div> 
            </div>  
        </div>
    )
}