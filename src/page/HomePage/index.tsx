import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import { Topics } from "../../components/Topics";
import Contact from "../../components/Concact";
import Footer from "../../components/Footer";

export default function HomePage() {
    return (
        <>
            <Header />
            <Banner />
            <Carousel 
                carouselTitle='ÚLTIMOS LANÇAMENTOS'
                stars={false}
                subtitle='Talvez você também se interesse por...'
                title='Angular 11 e Firebase'
                text='Construindo uma aplicação integrada com a plataforma do Google.'
                img={{
                    src:'src/images/Angular.svg',
                    alt:'Angular'
                }}
            />
            <Carousel 
                carouselTitle='MAIS VENDIDOS'
                stars={true}
                subtitle='Autora do Mês'
                title='Juliana Agarikov'
                text='Analista de sistemas e escritora, Juliana é especialista em Front-End.'
                img={{
                    src: 'src/images/Perfil-escritora 1.svg',
                    alt: 'Juliana Agarikov'
                }}
            />
            <Topics />
            <Contact />
            <Footer />
        </>
    )
}