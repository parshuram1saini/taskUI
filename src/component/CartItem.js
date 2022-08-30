import React from "react";

function CartItem({ cartItem }) {
  return (
    <div className="cart-item">
      <div className="cart-items-header">Cart-Item</div>
      {cartItem.length === 0 && (
        <div className="cart-item-empty">Cart is Empty</div>
            )}
        <div>
          {cartItem.map((item,index) => {
              return (
                  <div key={index}className="cart-item-list">

                  </div>
              )
          })}
        </div>
    </div>
  );
}

export default CartItem;
