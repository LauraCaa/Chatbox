import ButtonList from "@/components/buttonlist";
import NavbarMessages from "@/components/navbarmessages";
import User from "@/components/user";
import Users from "@/components/users";
import Chat from "@/components/chat";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div>
      <div class="row">
        <div class="col-2">
            <ButtonList></ButtonList>
        </div>
        <div class="col-4">
            <NavbarMessages></NavbarMessages>
            <Users></Users>
        </div>
        <div class="col-6">
          <User></User>
          <Chat></Chat>
        </div>
      </div>     
    </div>
  )
}
