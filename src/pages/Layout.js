import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

function Layout(){
    return (
        <div>
            <section className="hero is-info">
                <div className="hero-body">
                    <h1 className="title has-text-centered">JairolArt Shop</h1>
                </div>
            </section>
            <div>
                <NavBar />
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout;