import React from 'react';

function Cart({
  phone,
  hahdleCheckoutOn,
  handleGoToCkeckout,
  mo,
  payment,
  internet,
  onClick,
  handleUpdatePayment,
  handleUpdateInternet,
}) {
  const [activeMonth, setActiveMonth] = React.useState(3);

  const [activePayment, setActivePayment] = React.useState(0);

  const [activeInternet, setActiveInternet] = React.useState(0);

  const handleActiveMonth = (index, month) => {
    setActiveMonth(index);
    onClick(month);
  };

  const handleActivePayment = (index, payment) => {
    setActivePayment(index);
    handleUpdatePayment(payment);
  };

  const handleActiveInternet = (index, internet) => {
    setActiveInternet(index);
    handleUpdateInternet(internet);
  };

  return (
    <div className="cart">
      {phone.map((item) => (
        <div key={item.id} className="cart__phone">
          <div className="cart__image">
            <img src={item.img} alt="phone_image" />
          </div>
          <div className="cart__text">
            <div className="cart__name">Model: {item.name}</div>
            <div className="cart__cost">Cost: {item.cost} tenge</div>
            <div className="cart__discription">
              <div className="cart__contract">
                <p>
                  Contract for {item.period} month from
                  <span> {Math.round(item.cost / item.period)} tenge</span>
                </p>
              </div>
              <div className="cart__button" onClick={hahdleCheckoutOn}>
                CHECKOUT CONTRACT
              </div>
            </div>
            <div className="cart__total">Total: {item.cost} tenge</div>
          </div>
        </div>
      ))}
      {handleGoToCkeckout &&
        phone.map((item) => (
          <div key={item.id} className="cart__contract">
            <div className="cart__rool">
              <div className="cart__term">
                <h2 className="cart__title">CONTRACT TERM</h2>
                {mo.map((month, index) => (
                  <div
                    onClick={() => handleActiveMonth(index, month)}
                    key={index}
                    className={activeMonth === index ? 'cart__position push' : 'cart__position'}>
                    {month} MO
                  </div>
                ))}
              </div>
              <div className="cart__payment">
                <h2 className="cart__title">DOWN PAYMENT</h2>
                {payment.map((payment, index) => (
                  <div
                    onClick={() => handleActivePayment(index, payment)}
                    key={index}
                    className={activePayment === index ? 'cart__position push' : 'cart__position'}>
                    {payment} %
                  </div>
                ))}
              </div>
              <div className="cart__internet">
                <h2 className="cart__title">INTERNET AND MINUTES</h2>
                {internet.map((internet, index) => (
                  <div
                    onClick={() => handleActiveInternet(index, internet)}
                    key={index}
                    className={activeInternet === index ? 'cart__position push' : 'cart__position'}>
                    {internet} GB
                  </div>
                ))}
              </div>
            </div>
            <div className="cart__details">
              <div className="cart__amount">
                <p className="cart__detailstitle">Contract total amount</p>
                <h2 className="cart__cost">{item.cost} tenge</h2>
              </div>
              <div className="cart__amount">
                <p className="cart__detailstitle">Monthly payment</p>
                <h2 className="cart__cost">{Math.round(item.cost / item.period)} tenge</h2>
              </div>
              <div className="cart__amount">
                <p className="cart__detailstitle">Down payment</p>
                <h2 className="cart__cost">{item.downPayment} tenge</h2>
              </div>
              <div className="cart__button">BUY</div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cart;
