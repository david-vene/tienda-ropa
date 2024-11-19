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
            <div className={css.ProductCard_Header}>
            <img src={product.imagen} alt="producto" />
            </div>
            <div className={css.ProductCard_body}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            </div>
            <div className={css.desing_button}>
            <button className={css.ProductCard_button}> add to cart</button>
            </div>
            </div>
        )
    }
}
export default ProductCard;