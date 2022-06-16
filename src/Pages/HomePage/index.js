import React from "react";
import { Container } from "./styles";
import img1 from '../../assets/image1.jpeg';
import img2 from '../../assets/image2.jpeg';
import img3 from '../../assets/image3.jpeg';
import img4 from '../../assets/image4.jpeg';
import img5 from '../../assets/image5.jpeg';
import img6 from '../../assets/image6.jpeg';
import img7 from '../../assets/image7.jpeg';
import img8 from '../../assets/image8.jpeg';


export const Home = () => {

    const handleMouseOver = () => {
        const image = document.querySelectorAll('.image-div');
        const text = document.querySelectorAll('.text-div');

        Array.from(image).forEach((x) => {
            if(x.style.display === 'flex') {
                x.style.display = 'none'
            } else {
                x.style.display = 'flex'
            }
            })
        Array.from(text).forEach((x) => {
            if(x.style.display === 'none') {
                x.style.display = 'flex'
            } else {
                x.style.display = 'none'
            }
        })
    }
    
    return (
        <Container>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/Ihu0DrZVu2g?autoplay=1" 
                title="YouTube video player" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
            <div className="cards" onClick={handleMouseOver}>
                <div className="card">
                    <div className="text-div">
                        <p>Oi Amor, bom não consegui resolver o bug kkkk, mas queria so dizer que te amo demais, muito mesmo sei que não sou um cara de muitas declarações mas so quero que sabia que você foi a melhor coisa que aconteceu na minha vida, você é uma namorada excelente, fiz essa site simples aqui pra mostrar o quanto você é especial por uni as duas coisas que mais amo na vida. <br/>Eu te amo infinitamente!</p>
                    </div>
                    <div className="image-div">
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className="card">
                    <div className="text-div">
                        <p>Nosso dia no Moinho, você tava bem feliz de ter ido, e so de te ver feliz e tirando foto com as fadas ja alegrou totalmente meu dia kkk</p>
                    </div>
                    <div className="image-div">
                        <img src={img2} alt="img1" />
                    </div>
                </div>
                <div className="card">
                    <div className="text-div">
                        <p>A gente na igreja, queria que fosse nosso casorio kkkkkkkk, você tava maravilhosa nesse dia e em todos os dias.</p>
                    </div>
                    <div className="image-div">
                        <img src={img3} alt="img1" />
                    </div>      
                </div>
                <div className="card">
                    <div className="text-div">
                        <p>Na sua casa, uma foto bem fofa um lugar que marca muito a gente também</p>
                    </div>
                    <div className="image-div">
                        <img src={img4} alt="img1" />
                    </div>
                </div>
                <div className="card">
                    <div className="text-div">
                        <p>essa foto não lembro kkk mas que linda você ta</p>
                    </div>
                    <div className="image-div">
                        <img src={img5} alt="img1" />
                    </div>
                </div>
                <div className="card">
                    <div className="text-div">
                        <p>A gente no manauara depois da tua me fazer comprar um aspirador que ela quebrou em 2 meses kkkkkkk, mas as fotos ficaram lindas</p>
                    </div>
                    <div className="image-div">
                        <img src={img6} alt="img1" />
                    </div>
                </div>
                <div className="card">
                    <div className="text-div">
                        <p>A gente na vovó ainda kkkkk, nossas primeiras fotos </p>
                    </div>
                    <div className="image-div">
                        <img src={img7} alt="img1" />
                    </div>
                </div>
                <div className="card">
                    <div className="text-div">
                        <p>Se não me engano esse foi nosso segundo encontro onde eu peguei 30 reais num ingresso de um filme que nem sei se ia gostar so pra te agradar e ficar perto de você, no final o filme foi muito bom e o dia com você melhor ainda.</p>
                    </div>
                    <div className="image-div">
                        <img src={img8} alt="img1" />
                    </div>
                </div>
            </div>

        </Container>
    )
}