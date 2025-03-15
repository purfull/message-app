import NavBar from "../../components/navbar/NavBar";
import SideNavBar from "../../components/sidebar/SideBAr";
import { Outlet } from "react-router-dom";

const Console = () => {
    return ( 
        <div className="">
            <NavBar />
            <SideNavBar />
            <div className="absolute right-0 top-[10vh] w-[80%] p-6">
                <Outlet />

            </div>
        </div>
     );
}
 
export default Console;