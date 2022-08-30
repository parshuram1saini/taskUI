import React from "react";

function Header() {
  return (
    <div>
      <header className="header width-90">
        <div className="ui secondary  menu">
          <h2 className="active item">Product Shop</h2>
          <div className="item">Home</div>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input input-field">
                <input
                  type="text"
                  placeholder="Search by brand OR catrgory..."
                />
                <i className="search link icon"></i>
              </div>
            </div>
            <div className="ui item">
              <i className="cart arrow down icon cart-icon"></i>Cart(0)
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
