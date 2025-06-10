import { BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa JS do Bootstrap com Popper
import './App.scss';
import Cabecalho from './Componentes/Cabecalho';
import Home from './Componentes/Home';
import Login from './Componentes/Login';
import Register from './Componentes/Register';
import Sobrenos from './Componentes/Sobrenos';
function App() {
  return (
    <>
   <BrowserRouter>
           <Routes>
             <Route path='/' element={<Home />}/>
             <Route path='Login' element={<Login/>}/>
             <Route path='Register' element={<Register/>}/>
             <Route path='Sobrenos' element={<Sobrenos/>}/>
           </Routes>
         </BrowserRouter>
   
    </>
  );
}

export default App;
