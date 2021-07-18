import React, { useEffect, useState } from 'react'
import "./iphone.css"
function Iphone() {
    const [products, setProduct] = useState([])
    useEffect(() => {
      fetch("http://localhost:3002/products").then((res)=>res.json()).then((data)=>setProduct(data.products))
    }, [])
    console.log(products)
    return (
      <div>
        <div className="container alligin-content-center text-center justify-content-center">
          <div className="text-center">
            <div className="title-wrapper bold"><h1>Iphones</h1></div>
            <div className="subtitle-wrapper">The best for the brightest</div>
          </div>
          {products.map((product) => {
            let productsWrapper = (
              <div key={product.id} className="row">
                <div className="col-6 descWrapper">
                  <div className="description">
                    <h3>{product.product_name}</h3>
                    <h2>{product.product_brief_description}</h2>
                    <h4>Starting at {product.starting_price}</h4>
                    <div>{product.price_range}</div>
                    <div>
                      <a href={product.product_link}>Learn more</a>
                    </div>
                  </div>
                </div>
                <div className="col-6 imgWrapper">
                  <div className="image">
                    <img src={product.product_img} />
                  </div>
                </div>
              </div>
              //                 description_id: 1
              // price_id: 1
              // price_range: "From $9.54/mo. or $229 with trade-in.*"
              // product_brief_description: "Pro cameras. Pro display. Pro performance."
              // product_description: "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
              // product_id: 1
              // product_img: "https://www.apple.com/v/iphone/home/aj/images/overview/hero/hero_iphone_11_pro__d2lf9zrtcv8m_small_2x.jpg"
              // product_link: "https://www.apple.com/shop/buy-iphone/iphone-11-pro"
              // product_name: "iPhone SE"
              // product_url: "iphonese"
              // starting_price: "$399"
            );
            return productsWrapper;
          })}
        </div>
      </div>
    );
}

export default Iphone
