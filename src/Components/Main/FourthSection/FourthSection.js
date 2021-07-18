import React from 'react'
import './FourthSection.css'
import watch from "../../images/icons/watch_series6_m.png";
function FourthSection() {
    return (
     <section className="forth-section">
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-12 col-md-6 left-wrapper first-left">
					<div className="product-title2">
						iPad Air
					</div>
					<div className="discription1">
						Powerful. Colorful. Wonderful.
					</div>
					<div className="links1">
						<a href="#"> Learn more</a>
						<a href="#"> Buy</a>
					</div>
				</div>
	
				<div className="col-sm-12 col-md-6 right-wrapper first-right">
					<div className="logo-image">
						<img src={watch} alt=""/>
					</div>
					<div className="discription2">
						The future of health is on your wrist.
					</div>
					<div className="links2">
						<a href="#"> Learn more</a>
						<a href="#"> Buy</a>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default FourthSection
