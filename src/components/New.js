import React from 'react'

export const New = () => {
    return (
        <div className='new'>
            <h2 className="new__header">new</h2>
            <div className="new__sections">
                <section className="new__section">
                    <h3 className="new__section--title">Hydrogen VS Electric Cars</h3>
                    <p className="new__section--text">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </section>
                <hr className='new__sections--line' />
                <section className="new__section">
                    <h3 className="new__section--title">The Downsides of AI Artistry</h3>
                    <p className="new__section--text">What are the possible adverse effects of on-demand AI image generation?</p>
                </section>
                <hr className='new__sections--line' />
                <section className="new__section">
                    <h3 className="new__section--title">Is VC Funding Drying Up?</h3>
                    <p className="new__section--text">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </section>
            </div>
        </div>
    )
}
