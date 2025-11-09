import { useState } from 'react';
import { assets } from "../../../assets/data/assets.js";
import { productsData } from "../../../assets/data/products-data.js";
import './ProductSearchEngine.css';

const ProductCard = ({ product }) => (
  <div className="product-search-engine__product">
    <img className="product-search-engine__p-image" src={product.image} alt={product.alt} />
    <div className="product-search-engine__p-details">
      <h2 className="product-search-engine__p-details--p-name">{product.name}</h2>
      <h3 className="product-search-engine__p-details--p-price">{product.price}</h3>
    </div>
  </div>
);

const ProductSearchEngine = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const filteredProducts = productsData.filter(product =>
    product.name.toUpperCase().includes(searchTerm.toUpperCase())
  );

  return (
      <div className="search-location__section flex gap-[24px] ml-[280px] mt-[-15px] items-center location-search">
        <section className="product-search-engine__container mt-[-3px]">
          {isFocused &&
              <div className="product-search-engine__overlay"></div>
          }
          <form
              className="product-search-engine__form"
              onSubmit={(e) => { e.preventDefault() }}
          >
            <img
                className="product-search-engine__f-icon absolute top-[11px] left-[-1px] w-[19px] h-[19px]"
                src={assets.search}
                alt="search-icon"
            />
            <input
                type="text"
                placeholder="Введите запрос"
                className="product-search-engine__input pl-[35px]"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }}
                onFocus={() => { setIsFocused(true) }}
                onBlur={() => { setTimeout(() => setIsFocused(false), 200)}}
            />
          </form>
          {(isFocused && filteredProducts.length > 0) && (
            <div className="product-search-engine__product-list">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
  );
};

export default ProductSearchEngine;