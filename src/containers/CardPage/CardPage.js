import {useEffect, useState } from "react";
import { products, promocodes  } from "../../utils/products";
import css from "./CardPage.module.css";

const CardPage = () => {

    const card = JSON.parse(localStorage.getItem("card-urbanvibes"))  || [];
const [total, settotal] = useState(0);
const [haspromocode, sethaspromocode]= useState(false);


const applypromocode =(promocode) =>{

if(!haspromocode){
    return;
}

    if(promocodes && promocodes.filter(item => item.code = promocode).length > 0){
     const promocodedata = promocodes.Find(code => code.code === promocode);
    
     if(promocodedata) {

        if(promocodedata.quantity){
            if (total >= promocodedata.quantity){
                settotal(total - promocodedata.quantity);
            }



        }

        if(promocodedata.percentage){
            settotal(total -(total * promocodedata.percentage /100));

        }
    }
    
    }


}

useEffect(() => {
if(card.length > 0 && !haspromocode ){
    settotal(card.reduce((acc,item) => {
        const product = products.find(product => product.id ===item.id)

        if(product){
            return acc + (product.price * item.quantity);

        }else{
            return acc
        }
    }))
}



},[card])

    return(
    <div className={css.CardPage}>
        <div className={css.CardPage_list}>
            {card.length > 0 ? card.map((item, index)=> {

                const product = products.find(product => product.id === item.id)

                if(product){
                    return(
                       
                        <div key={index}className={css.CardPage_item}>
                                <div className={css.CardPage_item_header}>
                                    <img src={product.imagen}alt="producto"></img>
                                    
                                </div>

                                <div className={css.CardPage_item_body}>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                


                                </div>
                                <div className={css.CardPage_item_quantity}>
                                <p>quantity:{item.quantity}</p>
                                </div>
                                <div className={css.CardPage_item_total}>
                                <p>total:{product.price * item.quantity}</p>
                                </div>


                        </div>

                    )
                }


            }) : <p>carrito vacio</p>}



        </div>


<div className={css.CardPage_promocode}>



</div>

<div className={css.CardPage_total}>


    <p>total:</p>
    {card.length > 0 ? card.reduce((acc, item) => {
     const product = products.find(product => product.id === item.id)

if (product){

    return acc + (product.price * item.quantity);
}else{

    return acc;
}



    }, 0) : 0}
</div>

    </div>
)

}

export default CardPage;