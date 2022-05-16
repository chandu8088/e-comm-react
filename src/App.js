import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update' element={<h2>Update Product component</h2>}/>
        <Route path='/logout' element={<h2>Successfully loged out</h2>}/>
        <Route path='/profile' element={<h2>Profile component</h2>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
