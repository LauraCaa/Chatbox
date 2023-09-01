import Navbar from "./navbar"
import Contacts from "./contacts"
import Chat from "./chat"
export default function Content(){
    return(
        <div className="row">
            <Navbar></Navbar>
            <Contacts></Contacts>
            <Chat></Chat>    
        </div>
    )
}