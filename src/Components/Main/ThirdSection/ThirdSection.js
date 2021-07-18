import React from 'react'
import './ThirdSection.css'
import cardLogo from "../../images/icons/Card_logo_large.png";
function ThirdSection() {
    return (
      	<section className="third-section">
		<div className="container-fluid">
			<div className="internal-wrapper">
				<div className="logo-image">
					<img src={cardLogo} alt=""/>
				</div>
				<div className="discription">
                        Save 6% on Apple products with a <br />
                        new Apple Card-- all March long.*
				</div>
				<div className="links">
					<a href="#"> Learn more</a>
					<a href="#"> Buy</a>
				</div>
				<div className="small-text">
					<small> Exclusions and terms apply. <sup>3</sup></small>
				</div>
			</div>
		</div>
	</section>
    )
}

export default ThirdSection;
