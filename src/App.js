import {NavBar} from './Components/Navbar/NavBar';
import { ItemListContainer} from "./Components/Container/ItemListContainer";
import './estilos.css'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import {
BrowserRouter,
Route,
Switch,
Redirect
}from 'react-router-dom';
import {CartProvider} from "./context/CartContext";
import { CartScreen } from './Components/CartScreen/CartScreen';
import { UIProvider } from './context/UIContext';
import { Checkout } from './Components/Checkout/Checkout';


function App() {

  return (
    <> 
    <UIProvider>
      <CartProvider>
        <BrowserRouter>
          
          <NavBar />

         <Switch>
            <Route exact path="/">
            <ItemListContainer />
            </Route>

            <Route exact path="/cart">
              <CartScreen/>
            </Route>

            <Route path="/productos/:categoryId">
              <ItemListContainer />
            </Route>

            <Route exact path="/checkout">
             <Checkout/>
            </Route>

            <Route exact path="/detail/:itemId">
              <ItemDetailContainer/>
            </Route>

            <Route path="/contacto">
              <h1>Contacto</h1>
            </Route>

           <Route path="*">
              <Redirect to="/"/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </UIProvider>
  </> 
  );
}

export default App;
