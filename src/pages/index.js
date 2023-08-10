
import NavbarButtons from "@/components/navbarbuttons";
import NavbarMessages from "@/components/navbarmessages";
import User from "@/components/users";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div>
      <div class="row">
        <div class="col-2">
            <NavbarButtons></NavbarButtons>
        </div>
        <div class="col-4">
            <NavbarMessages></NavbarMessages>
            <User></User>
        </div>
        <div class="col-6">
        </div>
      </div>     
    </div>
  )
}
