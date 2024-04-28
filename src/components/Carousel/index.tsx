import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';

interface CarouselProps {
    carouselTitle: string;
    stars: boolean;
    subtitle: string;
    title: string;
    text: string;
    img: {
        src: string;
        alt: string;
    };
}

export default function CarouselComponent(props: CarouselProps) {
    function renderStars() {
        return props.stars && (
            <div className='starsContainer'>
                {[...Array(5)].map((_, index) => (
                    <img key={index} src="src/images/Star 5.svg" alt="Star" className='stars'/>
                ))}
            </div>
        );
    }

    return (
        <div className="mainCarouselContainer">
            <div className='carouselTitle'>
                <h1>{props.carouselTitle}</h1>
            </div>
            <div className='carouselAndCardContainer'>
            <div className="carouselContainer">
                <Carousel interval={null} data-bs-theme="dark">
                    <Carousel.Item>
                        <div className="d-flex justify-content-between slidesContainer">
                            <img
                                className="d-block w-33 carouselImage"
                                src="src/images/ApacheKafka.svg"
                                alt="Livro sobre apache kafka e spring boot da alura books"
                            />
                            <img
                                className="d-block w-33 carouselImage"
                                src="src/images/Liderança.svg"
                                alt="Livro sobre liderança em design da alura books"
                            />
                            <img
                                className="d-block w-33 carouselImage"
                                src="src/images/Javascript.svg"
                                alt="Livro sobre javascript assertivo da alurabooks"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='carouselItem'>
                        <div className="d-flex justify-content-between slidesContainer">
                            <img
                                className="d-block w-33 carouselImage"
                                src="src/images/Guia Front-end.svg"
                                alt="Livro Guia front end"
                            />
                            <img
                                className="d-block w-33 carouselImage"
                                src="src/images/Portugol.svg"
                                alt="Livro sobre portugol"
                            />
                            <img
                                className="d-block w-33 carouselImage"
                                src="src/images/Acessibilidade.svg"
                                alt="livro sobre acessibilidade"
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='cardContainer'>
                <div className='cardLeftSide'>
                    <div className='cardTextContent'>
                        {renderStars()}
                        <h2>{props.subtitle}</h2>
                        <h1>{props.title}</h1>
                        <p>{props.text}</p>
                    </div>
                    <div className='cardIcons'>
                        <img src="src/images/Favoritos.svg" alt="Favorite" />
                        <img src="src/images/Compras.svg" alt="Shopping" />
                    </div>
                </div>
                <div className='cardRightSide'>
                    <img src={props.img.src} alt={props.img.alt} />
                    <div className='cardLinkContainer'>
                        <a href="#">Saiba mais</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
