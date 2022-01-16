import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router,Route,Routes}  from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'
class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       advice:''
    }
    this.fetchAdvice = this.fetchAdvice.bind(this);
  }

  componentDidMount() {
    this.fetchAdvice();
    // console.log("component did mount");
  }
  
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({advice})
      // console.log(advice);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  render() {
    const { advice } = this.state;
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={this.fetchAdvice}>
            <span>Get a New Advice</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App
