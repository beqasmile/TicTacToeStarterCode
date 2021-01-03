import React from 'react';
class Square extends React.Component{
  constructor(props)
  {
      super(props);
      this.state = {
         value:null,
      };
  } 
  
  render() {
    return (
      <button className="square" onClick={() => this.props.onMyClick()}>
        {this.props.myValue}
      </button>
    );
  }
}

export default Square;