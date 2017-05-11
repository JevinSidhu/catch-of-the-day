import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event) {
    event.preventDefault();
    console.log('you changed the url');

    const storeId = this.storeInput.value

    this.context.router.transitionTo(`store/${storeId}`);

  }

  render() {
    return (
      <form className="store-selection" onSubmit={this.goToStore}>
        <h2> Please Enter a Store </h2>
        <input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref={(input) => {this.storeInput = input}} />
        <button type="submit"> Visit Store → </button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
