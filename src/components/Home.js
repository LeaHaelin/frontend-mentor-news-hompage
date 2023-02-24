import React from 'react';
import homeMobile from '../assets/images/image-web-3-mobile.jpg';
import homeDesktop from '../assets/images/image-web-3-desktop.jpg';

export const Home = () => {
    return (
        <div className='home'>
            <picture>
                <source media="(min-width:700px)" srcSet={homeDesktop} />
                <img className='home__header' src={homeMobile} alt="block" />
            </picture>
            <section className="home__contents">
                <h1 className="home__contents--title">The Bright Future of Web 3.0?</h1>
                <p className="home__contents--text">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button className="home__contents--btn">read more</button>
            </section>
        </div>
    )
}
