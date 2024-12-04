import { ProductCard } from "../../componets";
import { products } from "../../utils/products";
import css from './About.module.css';
const AboutUsPage =() => {
return(
    <div className={css.AboutUsPage}>
        <h1>about us</h1>
        <p> somos mucho más que una marca de ropa: somos una comunidad para jóvenes apasionados por el anime, los videojuegos, la música y todo lo que hace vibrar el corazón geek. Sabemos que tu estilo es una forma de expresar tus pasiones, y estamos aquí para ayudarte a llevarlo con orgullo. Nos inspiramos en tus personajes y juegos favoritos, en tus canciones y en la cultura que amas, para crear ropa única, cómoda y llena de personalidad.

Nuestro objetivo es que te sientas representado y encuentres un espacio que celebre lo que te hace diferente. Cada prenda que diseñamos está pensada para acompañarte en tus aventuras diarias, ya sea en un evento de cosplay, en una convención o simplemente disfrutando una tarde con amigos.</p>
    
    <img src="/imagenes/Streetwear-2-1024x683.webp"/>
    
</div>

   
    
)

}

export default AboutUsPage;