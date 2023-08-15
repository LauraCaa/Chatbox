import ButtonList from "@/components/buttonlist";
import NavbarMessages from "@/components/navbarmessages";
import User from "@/components/user";
import Users from "@/components/users";
import Chat from "@/components/chat";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="row">
        <div className="col-2 border-end">
            <ButtonList></ButtonList>
        </div>
        <div className="col-4 border-end">
          <div>
            <NavbarMessages></NavbarMessages>
            <Users></Users>
          </div>
            
        </div>
        <div className="col-6 border-end">
          <User></User>
          <Chat></Chat>
        </div>
      </div>

    </div>
      
  )
}
