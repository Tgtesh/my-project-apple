import React from 'react'
import './SecondSection.css'
function SecondSection() {
    return (
       <section className="second-section">
		<div className="container-fluid">
			<div className="internal-wrapper">
				<div className="product-title">
					iPhone 12 Pro
				</div>
				<div className="discription">
					It's a leap year.
				</div>
				<div className="price">
					From $41.62/mo.for 24 mo. or $999 before trade-in.<sup>2</sup><br/>
					Buy directly from Apple with special carrier offers.
				</div>
				<div className="links">
					<a href="#"> Learn more</a>
					<a href="#"> Buy</a>
				</div>
			</div>
		</div>
	</section>
    )
}

export default SecondSection;
