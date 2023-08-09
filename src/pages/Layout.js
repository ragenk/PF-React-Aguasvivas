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
            <footer className="hero is-info is-light mt-6">
                <div className="content has-text-centered m-3">
                    <p><strong>JairolArt Shop</strong> by Rafael Aguasvivas.</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout;