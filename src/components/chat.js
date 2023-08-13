export default function Chat(){
    return(
        <>
            <div className="row">
                <h4>Date</h4>
            </div>
            <div className="container">
                <div className="row">
                    <div>
                        <img src='/images/profile.jpeg' className="rounded-circle float-start" alt="photo" width="40" height="40"/>
                    </div>
                    <div>
                        <h4>Marta</h4>
                        <p>message time</p>
                    </div>   
                </div>
                <div>
                    <p>This is a message from someone in somewhere</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div>
                        <img src='/images/man.png' className="rounded-circle float-start" alt="photo" width="40" height="40"/>
                    </div>
                    <div>
                        <h4>Pepe</h4>
                        <p>message time</p>
                    </div>   
                </div>
                <div>
                    <p>This is an answer message from someone in somewhere</p>
                </div>
            </div>
            <form class="row g-3">
                <div class="col-10">
                    <label for="input" class="visually-hidden">Type a message</label>
                    <input type="text" class="form-control" placeholder="Type a message"/>
                </div>
                <div class="col-2">
                    <button type="submit" class="btn btn-primary mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg>
                    </button>
                </div>
            </form>
         </>
    )
}