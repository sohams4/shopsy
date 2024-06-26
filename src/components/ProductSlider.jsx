import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from "./ProductCard";
import { useEffect, useState } from 'react';

const ProductSlider = () => {
  const [products, setProducts] = useState([]);

  const fetchFeaturedProducts = async () => {
    try {
      const simulatedProducts = [
        { id: 1, productName: "Tshirt", regularPrice: 30, salePrice: 20, category: 'electronics' },
        { id: 2, productName: "Polo", regularPrice: 40, salePrice: 25, category: 'gadgets' },
        { id: 3, productName: "OverSized", regularPrice: 50, salePrice: 35, category: 'hardware' },
      ];

      const productsWithImages = simulatedProducts.map(product => ({
        ...product,
        image: `https://source.unsplash.com/random/500x500?sig=${Math.random()}&tshirt,polos,shirt`
      }));

      setProducts(productsWithImages);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const breakpoints = {
    220: { slidesPerView: 1 },
    480: { slidesPerView: 1 },
    720: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  };

  return (
    <section className="slider mt-3">
      <h2 className="font-color text-uppercase fs-1 m-5">Featured Products</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={breakpoints}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProductSlider;
