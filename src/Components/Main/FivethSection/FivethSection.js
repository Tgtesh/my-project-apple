import React from 'react'
import fitness from "../../images/icons/fitness.png";
import './FivethSection.css'

function FivethSection() {
    return (
     	<section className="fiveth-section">
		<div className="container-fluid">
			<div className="row">
	
				<div className="col-sm-12 col-md-6  left-wrapper second-left">
					<div className="product-title3">
						MacBook Air
					</div>
					<div className="discription2">
						Power. It's in the Air.
					</div>
					<div className="links2">
						<a href="#"> Learn more</a>
						<a href="#"> Buy</a>
					</div>
				</div>
	
				<div className="col-sm-12 col-md-6  right-wrapper second-right">
					<div className="logo-image">
						<img src={fitness} alt=""/>
					</div>
					<div className="discription2">
						A new fitness experience for everynone. Powered by Apple Watch.
					</div>
					<div className="links2 try-it">
						<a href="#"> Learn more</a>
						<a href="#"> Try it free <sup>4</sup></a>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default FivethSection
