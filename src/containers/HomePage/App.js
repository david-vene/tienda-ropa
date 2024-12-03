import css from './App.module.css';
import { ProductCard } from "../../componets";
import { products } from "../../utils/products";
import { IconName } from "react-icons/fa";

function App() {
  return (
    <div className={css.App}>
      <header className={css.App_header}>
      
        <h1>
        Rompe Esquemas, Viste Urbano
        </h1>
      
      </header>
      
      <div className={css.categorias}>
      <a href="#">hombre</a>
      <a href="#">mujer</a>
      <a href="#">calzado</a>
      <a href="#">sudadera</a>
      <a href="#">camisas</a>
      <a href="#">pantalones</a>
      <a href="#">accesorios</a>
      </div>
      
      <section className={css.nueva_ropa}>

      <div className={css.ropas}>
      {products.map((product) => {

return <ProductCard key={product.id} product={product} />

})}
      </div>
      
      </section>
    </div>
   
  );
}

export default App;
