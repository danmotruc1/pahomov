import React from 'react'
import PriceElement from '../PriceElement';

const PricesContainer = () => {

    return (
        <section
            className="ds s-pt-60 s-pt-md-5 s-pb-0 s-pb-md-15 s-pb-lg-150 choose-us-section c-gutter-10 overflow-visible"
            id="choose-us">
            <div className="container">
                <div className="row plan-content c-mt-0 c-mt-lg-10 c-mt-xl-0">
                    <PriceElement color='1' />
                    <PriceElement color='2' />
                    <PriceElement color='3' />
                    <PriceElement color='4' />
                </div>
            </div>
        </section>

    );
}

export default PricesContainer;