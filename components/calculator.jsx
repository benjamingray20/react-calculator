/* eslint-disable default-case */
import React, { useState } from 'react'

export default () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operations, setOperation] = useState('')
  const [result, setResult] = useState('')

  const updateResult = () => {
    switch (operations) {
      case '+':
        return num1 + num2
      case '-':
        return num1 - num2
      case '*':
        return num1 * num2
      case '/':
        return num1 / num2
      default:
        return num1 + num2
    }
  }
  return (
    <div className="form">
      <div className="title">React Calculator</div>
      <input
        type="number"
        className="num"
        onChange={(event) => { setNum1(parseFloat(event.target.value)) }}
        value={num1}
      />
      <select name="" id="" onChange={(event) => { setOperation(event.target.value) }}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        className="num"
        onChange={(event) => { setNum2(parseFloat(event.target.value)) }}
        value={num2}
      />
      <button type="button" className="equals" onClick={() => { setResult(updateResult()) }}>=</button>
      <input type="number" value={result} readOnly />
    </div>
  )
}
