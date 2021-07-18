import React from 'react'
import './FirstSection.css'
function FirstSection() {
    return (
       	<section className="first-section">
		<div className="container-fluid">
			<div className="internal-wrapper">
				<div className="product-title">
					iPhone 12
				</div>
				<div className="discription">
					Blast past fast.
				</div>
				<div className="price">
					From $29.12/mo.for 24 mo.or $699 before trade-in. <sup>1</sup> <br/>
					Buy directly from Applewith special carrier offers.
				</div>
				<div className="links">
					<a href="#"> Learn more </a>
					<a href="#"> Buy </a>
				</div>
			</div>
		</div>
	</section>
    )
}

export default FirstSection;
