import React from 'react';
import retroPcs from '../assets/images/image-retro-pcs.jpg';
import topLaptops from '../assets/images/image-top-laptops.jpg';
import gaming from '../assets/images/image-gaming-growth.jpg';

export const Popular = () => {
    return (
        <div className="popular">
            <div className="popular__content pop1">
                <img className="popular__content--visual" src={retroPcs} alt="retro PC" />
                <div className="popular__content--topic">
                    <h2 className="popular__topic--num">01</h2>
                    <h4 className="popular__topic--title">Reviving Retro PCs</h4>
                    <p className="popular__topic--text">What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="popular__content pop2">
                <img className="popular__content--visual" src={topLaptops} alt="laptop keyboard" />
                <div className="popular__content--topic">
                    <h2 className="popular__topic--num">02</h2>
                    <h4 className="popular__topic--title">Top 10 Laptops of 2022</h4>
                    <p className="popular__topic--text">Our best picks for various needs and budgets.</p>
                </div></div>
            <div className="popular__content pop3">
                <img className="popular__content--visual" src={gaming} alt="game controller" />
                <div className="popular__content--topic">
                    <h2 className="popular__topic--num">03</h2>
                    <h4 className="popular__topic--title">The Growth of Gaming</h4>
                    <p className="popular__topic--text">How the pandemic has sparked fresh opportunities.</p>
                </div></div>
        </div>
    )
}
