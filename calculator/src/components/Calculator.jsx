import React, { useState } from 'react';

import './Calculator.css';

function Calculator() {

  const [num, setNum] = useState(0);
  const [otherNum, setOtherNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    let input = e.target.value
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function pi(){
    setNum(3.1415956535)
  }

  function percentage() {
    setNum(num / 100);
  }

  function Handler(e) {
    let opInput = e.target.value;
    setOperator(opInput);
    setOtherNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === '/') {
      setNum(parseFloat(otherNum) / parseFloat(num));
    } else if (operator === 'X') {
      setNum(parseFloat(otherNum) * parseFloat(num));
    } else if (operator === '-') {
      console.log(otherNum)
      console.log(num)
      console.log(otherNum - num)
      setNum(parseFloat(otherNum) - parseFloat(num));
    } else if (operator === '+') {
      setNum(parseFloat(otherNum) + parseFloat(num));
    }
  }

  return (
    <div className='container'>
      <h1 className='results'>{num}</h1>
      <div className='buttons'>
        <button className='ac' onClick={clear}>AC</button>
        <button className='operators' onClick={pi}>π</button>
        <button className='operators' onClick={percentage}>%</button>
        <button className='operators' onClick={Handler} value='/'>/</button>
        <button onClick={inputNum} value={7} >7</button>
        <button onClick={inputNum} value={8} >8</button>
        <button onClick={inputNum} value={9} >9</button>
        <button className='operators' onClick={Handler} value='X'>X</button>
        <button onClick={inputNum} value={4} >4</button>
        <button onClick={inputNum} value={5} >5</button>
        <button onClick={inputNum} value={6} >6</button>
        <button className='operators' onClick={Handler} value='-'>-</button>
        <button onClick={inputNum} value={1} >1</button>
        <button onClick={inputNum} value={2} >2</button>
        <button onClick={inputNum} value={3} >3</button>
        <button className='operators' onClick={Handler} value='+'>+</button>
        <button onClick={inputNum} value={0} >0</button>
        <button onClick={inputNum} value={'.'} >,</button>
        {/* <button onClick={}> CE</button> */}
        <button className='equal' onClick={calculate}>=</button>
      </div>
    </div>
  )
}

export default Calculator
