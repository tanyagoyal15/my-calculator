import './App.css';
import { Component } from 'react'
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this)
    this.state = {
      inputValue : ''
    }
  }

  handleOnClick = (e) => {
    if(e.target.innerHTML === '=') {
      this.setState({inputValue : eval(this.state.inputValue)})
    } else if(e.target.innerHTML === 'C') {
      this.setState({inputValue : ''})
    } else {
      this.setState({inputValue : this.state.inputValue + e.target.innerHTML})
    }    
  }

  render() {
    return (
      <div className="App">
        <div className='calculator-container'>
          <Calculator 
            value={this.state.inputValue}
            handleOnClick={this.handleOnClick} />
        </div>
      </div>
    );
  }
}

export default App;
