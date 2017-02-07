import React from 'react';
import {connect} from 'react-redux';

class CounterContainer extends React.Component {
  constructor(props,context){
    super(props, context);
  }

  render(){

    const containerStyle = {
      backgroundColor: '#add8e6',
      padding: '5px',
      marginLeft: '30px',
      marginTop: '30px',
    }

    const counterStyle = {
      height:'30px',
      width:'30px',
      fontSize: '20px',
      color:'white',
      backgroundColor:'black',
      padding: '5px',
      borderRadius: '20px',
      textAlign: 'center',
      verticalAlign: 'middle'
    };

    return (
      <div style={containerStyle}>
        <div style={counterStyle}>
          {this.props.counter}
        </div>
      </div>
    );
  }
}

function mapStateToProps(store, ownProps){
  return {
    counter: store.counter
  };
}

export default connect(mapStateToProps)(CounterContainer);
