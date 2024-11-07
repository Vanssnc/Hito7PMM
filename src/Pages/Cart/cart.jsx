import React, { useContext } from 'react';
import { CounterContext } from '../../CounterContext';
import { UserContext } from '../../context/UserContext';
//import { pizzaCart as initialPizzaCart } from '../../assets/js/pizzas'; 

export default function Cart() {

  const { pizzaCart, increaseQuantity, decreaseQuantity } = useContext(CounterContext);
  const total = pizzaCart.reduce((acc, item) => acc + item.price * item.count, 0);
  const { token } = useContext(UserContext);

  const handlePayment = () => {
    alert("Pago.");
  };

  return (
    <div className="cart">
      <h1>Tu Carrito de Compras</h1>
      <div className="cart-items">
        {pizzaCart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.count}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
            </div>
          </div>
        ))}
      </div>
      <h2>Total de la compra: ${total}</h2>
      <button onClick={handlePayment} disabled={!token}>Pagar</button>
    </div>
  );
}
