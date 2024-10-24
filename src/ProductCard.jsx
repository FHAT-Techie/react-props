function ProductCard({productName,productDescription,productPrice,isInStock,sellersName}) {
    return(
        <div className="productCard">
           <div className="productCardTop">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
           </div>

           <div className="productCardMid">
            <div className="cardPricingAndAvaliability">
                <h1>${productPrice}</h1>
                <p style={{ color: isInStock ? "green" : "red" }}>
            {isInStock ? "In Stock" : "Out of Stock"}
          </p>
            </div>

            <h1>Seller: <span>{sellersName}</span></h1>
           </div>

           <div className="cardBottom">
            <a href="http://">Learn More</a>
           </div>
        </div>
    )
}

export default ProductCard