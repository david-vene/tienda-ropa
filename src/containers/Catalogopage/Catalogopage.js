import css from './catalogopage.module.css';
import { ProductCard } from "../../componets";
import { products } from "../../utils/products";



function Catalogopage() {

    return (
        <div className={css.App}>
   
  
        
    
          <div className={css.ropas}>
          {products.map((product) => {
    
    return <ProductCard key={product.id} product={product} />
    
    })}
          </div>
          
         
        </div>
       
      );
    }

export default Catalogopage;
