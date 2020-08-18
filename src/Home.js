import React from 'react'
import Logo from "./primeimg.png"
import TV1 from "./productimg/TV1.png"
import TV2 from "./productimg/TV2.png"
import mobile1 from "./productimg/mobile1.png"
import mobile2 from "./productimg/mobile2.png"
import Why from "./productimg/StartWhy.png"
import Laptop1 from "./productimg/Laptop1.png"
import Laptop2 from "./productimg/Laptop2.png"
import Bar from "./productimg/Bar.png"
import "./Home.css";
import Product from "./Product"
import Logo1 from "./lean.png";
const Home = () => {
    return (
        <div className="home">
            <img className="home__image" src={Logo} ></img>

            <div className="home__row">
                <Product
                id="2112"
                title="The Lean Startup:How constant Innovation Creates"
                image={Logo1}
                price={32.4}
                rating={5}
                />

                <Product
                    id="212"
                    title="Start with why...Find your why"
                    image={Why}
                    price={32.4}
                    rating={5}
                />
            </div>
            
            <div className="home__row">

            <Product
                    id="2111212"
                    title="mi band ..keep you feet and measure your health"
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    price={540}
                    rating={3}
                />

                <Product
                    id="2110212"
                    title="Alexa speaker with AI features..Listen your fav music.."
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    price={500}
                    rating={3}
                />
            </div>
         

            <div className="home__row">
                <Product
                    id="21112"
                    title="Redmi 8A Dual(Sea Blue , 3GB RAM, 32GB Storage) - Dual Cameras & 5,000 mAH Battery"
                    image={mobile1}
                    price={32.4}
                    rating={5}
                />

                <Product
                    id="211212"
                    title="Samsung Galaxy M21 (Raven Black, $GB RAM, 64GB Storage)"
                    image={mobile2}
                    price="50"
                    rating={4}
                />

                <Product
                    id="2110212"
                    title="Redmi 8A Dual(Sea Blue , 3GB RAM, 32GB Storage) - Dual Cameras & 5,000 mAH Battery"
                    image={mobile1}
                    price="40"
                    rating={3}
                />   
            </div>

            <div className="home__row">
                <Product
                    id="2112912"
                    title="TCL 138.71 cm (55 inches) 4K Ultra HD Smart LED TV 55P65US-2019 (BLACK) | Built In Alexa"
                    image={TV1}
                    price={540}
                    rating={5}
                />

                <Product
                    id="2112812"
                    title="TCL 108 cm (43 inches) 4K Ultra HD Smart Certified Android LED TV 4358E-2019 (BLACK)"
                    image={TV2}
                    price={500}
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product
                    id="2117212"
                    title="Dell Inspiration 5482 14-inch FHD 2in! Laptop (8th Gen Core i5/8GB/512GB SSD/Window...)"
                    image={Laptop2}
                    price={1000}
                    rating={5}
                />

                    <Product
                        id="2116212"
                        title="HP Pavillion 360 Core i7 8th Gen 14-inch TouchScreen 2-in-1 FHD"
                        image={Laptop1}
                        price={1200}
                        rating={5}
                    />

                    <Product
                        id="2511212"
                    title="Dell Inspiration 5482 14-inch FHD 2in! Laptop (8th Gen Core i5/8GB/512GB SSD/Window...)"
                        image={Laptop2}
                        price={1000}
                        rating={5}
                    />

                    <Product
                        id="2112412"
                    title="HP Pavillion 360 Core i7 8th Gen 14-inch TouchScreen 2-in-1 FHD"
                        image={Laptop1}
                        price={1240}
                        rating={5}
                    />

           
            </div>

            <div className="home__row">
                <Product
                    id="2113212"
                    title="TCL 138.71 cm (55 inches) 4K Ultra HD Smart LED TV 55P65US-2019 (BLACK) | Built In Alexa"
                    image={TV1}
                    price={540}
                    rating={5}
                />

                
            </div>
            <div className="home__row">
                <Product
                    id="2151212"
                    title="TCL 138.71 cm (55 inches) 4K Ultra HD Smart LED TV 55P65US-2019 (BLACK) | Built In Alexa"
                    image={TV1}
                    price={540}
                    rating={5}
                />

                <Product
                    id="2112212"
                    title="TCL 108 cm (43 inches) 4K Ultra HD Smart Certified Android LED TV 4358E-2019 (BLACK)"
                    image={TV2}
                    price={500}
                    rating={5}
                />

                <Product
                    id="2111212"
                    title="mi band ..keep you feet and measure your health"
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    price={540}
                    rating={3}
                />

                <Product
                    id="2110212"
                    title="Alexa speaker with AI features..Listen your fav music.."
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    price={500}
                    rating={3}
                />
            </div>

           
        </div>
    )
}

export default Home;
