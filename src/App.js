import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterContainer from './components/counter/CounterContainer';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/products/Products';
import Navbar from './components/navbar/Navbar';
import ProductDetails from './components/productDetails/ProductDetails';
import Todo from './components/todoList/Todo'
import FormComponent from './components/form/Form';
import ExpenceTracker from './components/expense-tracker/ExpenceTracker';
function App() {
  return (
    <>
      <BrowserRouter> 
      <Navbar/>
        <Routes>
          <Route path='counter' element={<CounterContainer/>}/>
          <Route path='/' element={<ExpenceTracker />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='products/:id' element={<ProductDetails/>}/>
          <Route path='/todo' element={<Todo/>} />
          <Route path='/form' element={<FormComponent/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
