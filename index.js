import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1><center>Hayuu Ahh</center></h1>
      <p><center>Tapi Kamana ?</center></p>
      </div>
    );
  }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));