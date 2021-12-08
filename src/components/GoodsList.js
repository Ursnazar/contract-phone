import React from 'react';

import Header from './Header';
import Goods from './Goods';
import Cart from './Cart';

import { phone } from '../assets/items';

function GoodsList() {
  console.log(phone);

  const [db, setDb] = React.useState(phone);

  const [costAmount, setCostAmount] = React.useState(0);

  const [root, setRoot] = React.useState(true);

  const [ischeckout, setIscheckout] = React.useState(false);

  const handleAddToCart = (id) => {
    let newDb = db.filter((phone) => phone.id === id);
    setDb(newDb);
    setRoot(!root);
    handleUpdateCost(newDb);
  };

  function handleUpdateCost(arr) {
    setCostAmount(arr[0].cost);
  }

  const hahdleCheckoutOn = () => {
    setIscheckout(!ischeckout);
  };

  const handleUpdateMonth = (month) => {
    let newItems = [...db];
    newItems[0].period = month;
    setDb(newItems);
  };

  const handleUpdatePayment = (payment) => {
    console.log(payment);
    let newItems = [...db];
    const cost = costAmount;
    newItems[0].cost = cost - payment * (cost / 100);
    newItems[0].downPayment = (cost / 100) * payment;
    setDb(newItems);
  };

  const handleUpdateInternet = (internet) => {
    console.log(internet);
    let newItems = [...db];
    const cost = costAmount;
    newItems[0].cost = cost + internet * (cost / 100);
    setDb(newItems);
  };

  return (
    <>
      <Header classActive={root}>
        {root
          ? 'Select the phone you want and add it to your shopping cart'
          : 'Delete and return to product'}
      </Header>
      {root ? (
        <Goods phone={db} handleAddToCart={handleAddToCart} />
      ) : (
        <Cart
          phone={db}
          hahdleCheckoutOn={hahdleCheckoutOn}
          handleGoToCkeckout={ischeckout}
          onClick={handleUpdateMonth}
          handleUpdatePayment={handleUpdatePayment}
          handleUpdateInternet={handleUpdateInternet}
          mo={[6, 12, 18, 24]}
          payment={[0, 10, 20, 40, 60]}
          internet={[0, 12, 20, 50]}
        />
      )}
    </>
  );
}

export default GoodsList;
