import Logo from "./logo"
import Search from "./search"
import User from "./user"

export default function Bars(){
    return(
        <div className="row border-bottom">
            <Logo></Logo>
            <Search></Search>
            <User></User>
        </div>
    )
}