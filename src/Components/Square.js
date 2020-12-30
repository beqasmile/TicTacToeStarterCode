import React from 'react';
class Square extends React.Component{
    
  render() {
    return (
      <button className="square">
        {this.props.myValue}
      </button>
    );
  }
}

export default Square;