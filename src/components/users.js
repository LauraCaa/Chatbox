import '@/assets/globals.css'
export default function User(){
    return(
        <div>
            <div className="d-flex text-secondary pt-4 px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <h5 className="px-2">Pinned message</h5>
            </div>
            <div>
                <div className="p-3">
                    <img src='/images/odama.png' className="mr-2 rounded-circle float-start" alt="photo" width="80" height="80"></img>
                    <h4 className="pt-2"><strong>Odama Studio</strong></h4>
                    <p className="text-success">Happy Typing...</p>
                </div>
                <div className="p-3">
                    <img src='/images/hatypo.png' className="mr-2 rounded-circle float-start" alt="photo" width="80" height="80"></img>
                    <h4><strong>Hatypo Studio</strong></h4>
                    <p>Momon: Lahh gas!</p>
                </div>
                <div className="p-3">
                    <img src='/images/nola.png' className="mr-2 rounded-circle float-start" alt="photo" width="80" height="80"></img>
                    <h4><strong>Nolaa</strong></h4>
                    <p>Keren banget</p>
                </div>
            </div>
            <div>
                <div className="d-flex text-secondary py-4 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                    </svg>
                    <h5 className="px-2">All Message</h5>
                </div>
                <div className="p-3">
                    <img src='/images/mass.png' className="mr-2 rounded-circle float-start" alt="photo" width="80" height="80"></img>
                    <h4><strong>Happy</strong></h4>
                    <p className="text-success">Typing...</p>
                </div>
                <div className="p-3">
                    <img src='/images/rohmad.png' className="mr-2 rounded-circle float-start" alt="photo" width="80" height="80"></img>
                    <h4><strong>Rohmad</strong></h4>
                    <p>Zaa jo lali ngeshot yaa</p>
                </div>
                <div className="p-3">
                    <img src='/images/listian.png' className="mr-2 rounded-circle float-start" alt="photo" width="80" height="80"></img>
                    <h4><strong>Listian</strong></h4>
                    <p>Mantapp za</p>
                </div>   
            </div>   
        </div>
    )
}