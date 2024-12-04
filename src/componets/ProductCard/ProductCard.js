import React, {Component} from "react";
import classNames from "classnames";
import css from "./ProductCard.module.css";

class ProductCard extends Component {


    constructor(props){
        super (props);

    }
    render(){
const { className, product } = this.props;
        return(
            <div className={classNames(css.ProductCard, className)}>
                <h3>{product.name}</h3>
            <div className={css.ProductCard_Header}>
            <img  src={product.imagen} alt="producto" />
            </div>
            <div className={css.ProductCard_body}>
      
            <p>{product.price}</p>
            </div>
            <div className={css.desing_button}>
            <button className={css.ProductCard_button}
            onClick={(e)=> {
            e.preventDefault();
                
            const currentcard = JSON.parse(localStorage.getItem("card-urbanvibes"))  || [];

                let productTemp = currentcard.find((item) => item.id === product.id);
                if (productTemp){
                    productTemp.quantity += 1;
                }else{

                    currentcard.push({ id: product.id, quantity: 1 });
                }

                localStorage.setItem("card-urbanvibes" , JSON.stringify(currentcard));
            }}
            
            
            > 
                
                
                add to cart
                
                
                </button>
            </div>
            </div>
            
        )
    }
}
export default ProductCard;