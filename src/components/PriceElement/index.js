import React from 'react'

const PriceElement = (props) => {
    const color = props.color;

    return (
        <div className="col-xl-3 col-md-6">
            <div className={`pricing-plan plan${color} cs`}>
                <div className="plan-name">
                    <h5 className="text-uppercase">Routine Maintenance</h5>
                </div>
                <div className="plan-description">
                    <h6 className="fw-300 text-uppercase">Start from</h6>
                </div>
                <div className="price-wrap color-main2">
                    <span className="plan-price">76</span>
                    <span className="plan-sign">$</span>
                </div>
                <div className="plan-features">
                    <ul>
                        <li>
                            <i className="ico-check fs-12 fw-900" />6 x car wash
                        </li>
                        <li>
                            <i className="ico-check fs-12 fw-900" />1 x lights check
                        </li>
                        <li>
                            <i className="ico-check fs-12 fw-900" />1 x tires replacement
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default PriceElement;