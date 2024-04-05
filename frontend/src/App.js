import { Route,BrowserRouter as Router ,Routes, useSearchParams} from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart'
import Home from './pages/Home'
import Footer from './components/Footer';
import Productdetails from './pages/Productdetails';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [keyword,setkeyword]=useState('');
  const [cartitems,setcartitems]=useState([])
  return (
    <div className="App">
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            
/>
      <Header setkeyword={setkeyword} cartitems={cartitems}/>
      <Routes>
        <Route path='/' element={<Home keyword={keyword}/>}/>
        
        <Route path="/cart" element={<Cart cartitems={cartitems} setcartitems={setcartitems}/>}/>
        <Route path='/product/:id' element={<Productdetails cartitems={cartitems} setcartitems={setcartitems}/>}/>
      </Routes>  
      <Footer/>
    </div>
  );
}

export default App;
