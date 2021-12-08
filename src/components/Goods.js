import React from 'react';

function Goods({ phone, handleAddToCart }) {
  return (
    <div className="goods">
      {phone.map((item) => (
        <div className="goods__card" key={item.id}>
          <div className="goods__image image">
            <img src={item.img} alt="phone_image" />
          </div>
          <div className="goods__name">
            <p>{item.name}</p>
          </div>
          <div className="goods__cost">
            <p>{item.cost.toLocaleString()} tenge</p>
          </div>
          <div className="goods__discription">
            <p>
              Contract for {item.period} month from
              <span> {Math.round(item.cost / item.period).toLocaleString()} tenge</span>
            </p>
          </div>
          <div className="goods__button" onClick={() => handleAddToCart(item.id)}>
            Add to cart
          </div>
        </div>
      ))}
    </div>
  );
}

export default Goods;
