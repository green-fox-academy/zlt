import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <Fruits list={['alma', 'korte', 'kecske']}></Fruits>
  }
}

const Fruits = ({list}) => {
  const [text, setText] = useState('');

  useEffect(() => {
    alert('kecske');
    document.title = text;
    return () => {
      console.log('bezar');
    }
  }, [])

  const handleClick = (fruit) => {
    alert(fruit);
  };

  return (
    <div>
      {
        list.map(e =>
          (<p key={e} onClick={() => handleClick(e)}>{e}</p>)
        )
      }
      <input type="text" onChange={event => setText(event.target.value)}/>
      <p>
        Fruit to add { text }
      </p>
    </div>
  );
}


export default App;
