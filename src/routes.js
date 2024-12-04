import { HomePage, AboutUsPage,CardPage, Catalogopage } from "./containers";


export const routes = [
{
    path: '/',
    element: <HomePage />
},
{
    path:'/About',
    element: <AboutUsPage />
},
{
    path:'/Card',
    element: <CardPage />
},


]