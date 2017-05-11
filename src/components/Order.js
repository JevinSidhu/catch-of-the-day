import React from 'react';

class Order extends React.Component {
  render() {
    const orderIDs = Object.keys(this.props.order);
    return (
      <div className="order-wrap">
        <h2> Your Order </h2>
      </div>
    )
  }
}

export default Order;
