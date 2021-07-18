import React from 'react'
import logo_one from "../../images/icons/logo__one_medium.png";
import logo_tv from "../../images/icons/logo_tv+-medium.png";
import logo__signiture from "../../images/icons/logo__signiture_medium (4).png";
import './SixthSection.css'

function SixthSection() {
    return (
     	<section className="sixth-section">
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-12 col-md-6 -md left-wrapper third-left">
					<div className="logo-image">
						<img src={logo_one} alt=""/>
					</div>
					<div className="discription2">
						Bundle up to six Apple Services.
						And enjoy more for less.
					</div>
					<div className="links2 try-it">
						<a href="#"> Learn more</a>
						<a href="#"> Try it free <sup>5</sup></a>
					</div>
				</div>
	
				<div className="col-sm-12 col-md-6 right-wrapper third-right">
					<div className="logo-image">
						<img src={logo_tv} alt=""/>
					</div>
					<div className="conversation">
						<img src={logo__signiture} alt=""/>
					</div>
					<div className="links3">
						<a href="#"> With Amanda Gorman</a><br/>
						<a href="#"> Watch now </a>
					</div>
				</div>
			</div>
		</div>
	</section>

    )
}

export default SixthSection
