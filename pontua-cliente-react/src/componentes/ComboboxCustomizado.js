import Dropdown from 'react-toolbox/lib/dropdown';
import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default  class ComboboxCustomizado extends Component {
  state = {default: this.props.default};

  handleChange = (value) => {
    this.setState({default: value});
    PubSub.publish("valor-combo", value);
  };

  render () {
    return (
      <div className="pure-control-group">
       <label className ="_2WvFs"
	  		htmlFor={this.props.id}>{this.props.label}
        </label>
      
        <Dropdown
          source={this.props.source}
          onChange={this.handleChange}
          value={this.state.default}
        />
      </div>
    );
  }
}