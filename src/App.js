import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Fotografia from "./pages/Fotografia"
import Esculturas from './pages/Esculturas'
import Pinturas from './pages/Pinturas'
import Error from './pages/Error'
import Layout from './pages/Layout'
import Escultura from './components/Escultura/Escultura'
import "bulma/css/bulma.css"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>                    
                    <Route index element={<Home/>}/>
                    <Route path="esculturas" element={<Esculturas/>}/>
                    <Route path="esculturas/:productoId" element={<Escultura/>}/>
                    <Route path="fotografia" element={<Fotografia/>}/>
                    <Route path="pinturas" element={<Pinturas/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
            
    );    
}

export default App;