import SobreMi from "./components/v1/SobreMi";

const Home = () => import('./components/Home')
const Contacto = () => import('./components/Contacto')
const Blog = () => import('./components/Blog')
const Me = () => import('./components/Me')
const Homev1 = () => import('./components/v1/Home')
const Me1 = () => import('./components/v1/SobreMi')
const Servicios = () => import('./components/v1/Servicios')
const AvisoLegal = () => import('./components/v1/AvisoLegal')



export const routes = [
    // {
    //     name: 'Inicio',
    //     path: '/',
    //     component: Home,
    // },
    // {
    //     name: 'Sobre mí',
    //     path: '/contacto',
    //     component: Contacto
    // },
    // {
    //     name: 'servicios',
    //     path: '/blog',
    //     component: Blog
    // },
    // {
    //     name: 'Preguntas frecuentes',
    //     path: '/me',
    //     component: Me
    // },
    {
        name: 'Inicio',
        path: '/',
        component: Homev1
    },
    {
        name: 'Sobre Mí',
        path: '/SobreMi',
        component: Me1
    },
    {
        name: 'Servicios',
        path: '/servicios',
        component: Servicios,
    },
    {
        name: 'Legal',
        path: '/AvisoLegal',
        component: AvisoLegal,
    }

]
