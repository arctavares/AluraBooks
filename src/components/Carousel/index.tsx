import 'swiper/swiper.min.css'
import { Swiper, SwiperSlide } from 'swiper/react'

interface CarouselProps {
    carouselTitle: string;
    stars: boolean;
    subtitle: string;
    title: string;
    text: string;
    img: {
        src: string,
        alt: string
    }
}

export default function Carousel(props: CarouselProps) {

    function renderStars() {
            return props.stars && (
            <div className='starsContainer'>
                {[...Array(5)].map(() => {
                    return <img src="src/images/Star 5.svg" alt="Start" className='stars'/>
                })}
            </div>
        ) 
    }

    return (
        <div className="mainCarouselContainer">
            <div className='carouselTitle'>
                <h1>{props.carouselTitle}</h1>
            </div>
            <div className="swiper">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                    }}
                >
                    <SwiperSlide className='swiperSlide'>
                        <img src="src/images/ApacheKafka.svg" alt="Livro sobre apache kafka e spring boot da alura books" />
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                        <img src="src/images/Liderança.svg" alt="Livro sobre liderança em design da alura books" />
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                        <img src="src/images/Javascript.svg" alt="Livro sobre javascript assertivo da alurabooks" />
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                        <img src="src/images/Guia Front-end.svg" alt="Livro Guia front end" />
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                        <img src="src/images/Portugol.svg" alt="Livro sobre portugol" />
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                        <img src="src/images/Acessibilidade.svg" alt="livro sobre acessibilidade" />
                    </SwiperSlide>
                </Swiper>
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
    );
}
