import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-container'>
            <img className='home-photo' src="../../public/images/wallpaper.jpg" alt="" />
            <h1>PS5 games galore, adventure at the store</h1>
            <p>Embark on a gaming odyssey at our premier PS5 Haven – your go-to destination for the latest and greatest in PlayStation excitement. Immerse yourself in a carefully curated selection of top-tier games and accessories. From pulse-pounding adventures to immersive storytelling, we offer a haven for every gamer. Step into the future of gaming with cutting-edge technology and unparalleled service. Your epic journey starts here – welcome to a new era of digital delight!</p>
            <Link to="/shop">Buy game</Link>
        </div>
    )
}

export default Home;