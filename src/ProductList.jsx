import ProductCard from "./ProductCard.jsx";

function ProductList() {
    const perfumes = [
        {
          productName: "Mystic Rose",
          productDescription: "A floral fragrance with notes of rose, jasmine, and sandalwood.",
          productPrice: 4500,
          isInStock: true,
          sellersName: "Fragrance Haven"
        },
        {
          productName: "Ocean Breeze",
          productDescription: "A fresh and clean scent with hints of sea salt, lime, and amber.",
          productPrice: 3800,
          isInStock: false,
          sellersName: "Aroma Essence"
        },
        {
          productName: "Velvet Oud",
          productDescription: "An exotic blend of oud, patchouli, and musk for a deep, warm fragrance.",
          productPrice: 6500,
          isInStock: true,
          sellersName: "Luxury Scents"
        },
        {
          productName: "Citrus Splash",
          productDescription: "A vibrant, zesty scent with notes of lemon, bergamot, and orange blossom.",
          productPrice: 3000,
          isInStock: true,
          sellersName: "Fresh Scent Co."
        },
        {
          productName: "Midnight Vanilla",
          productDescription: "A sensual, sweet vanilla fragrance with undertones of tonka bean and honey.",
          productPrice: 5000,
          isInStock: false,
          sellersName: "Signature Perfumes"
        }
      ];
      


    
      return (
        <div>
          {perfumes.map((item, index) => (
            <div key={index}>
              <ProductCard
                productName={item.productName}
                productDescription={item.productDescription}
                productPrice={item.productPrice}
                isInStock={item.isInStock}
                sellersName={item.sellersName}
              />
            </div>
          ))}
        </div>
      );
    }

export default ProductList