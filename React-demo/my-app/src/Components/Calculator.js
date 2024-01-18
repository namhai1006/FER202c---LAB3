import React, { useState } from 'react';

const Calculator = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleNumberButtonClick = (value) => {
    if (operation) {
      setSecond((prevSecond) => prevSecond + value);
    } else {
      setFirst((prevFirst) => prevFirst + value);
    }
  };

  const handleOperationChange = (value) => {
    setOperation(value);
  };

  const handleClear = () => {
    setFirst('');
    setSecond('');
    setOperation('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const num1 = parseFloat(first);
      const num2 = parseFloat(second);

      if (isNaN(num1) || isNaN(num2)) {
        setResult('Error');
        return;
      }

      switch (operation) {
        case '+':
          setResult((num1 + num2).toString());
          break;
        case '-':
          setResult((num1 - num2).toString());
          break;
        case '*':
          setResult((num1 * num2).toString());
          break;
        case '/':
          setResult((num1 / num2).toString());
          break;
        default:
          setResult('Error');
      }
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <div className='row' style={{ display: 'flex' }}>
        <h3 className='name' style={{ margin: '0', paddingBottom: '10px', paddingRight: '15px' }}>
          First:
        </h3>
        <input className='first' style={{ height: '20px', width: '175px' }} type="text" value={first} readOnly />
      </div>
      <div>
      <div className='row' style={{ display: 'flex' }}>
      <h3 className='name' style={{ margin: '0', paddingBottom: '10px', paddingRight: '15px' }}>
          Second:
        </h3>
        <input className='second' style={{ height: '20px', width: '150px' }} type="text" value={second} readOnly />
      </div>
      </div>
      <div className='row' style={{ display: 'flex' }}>
      <h3 className='name' style={{ margin: '0', paddingBottom: '10px', paddingRight: '15px' }}>
          Operation:
        </h3>
        <select onChange={(e) => handleOperationChange(e.target.value)} value={operation}>
          <option value="" >Select Operation</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <div>
        <button onClick={() => handleNumberButtonClick('1')}>1</button>
        <button onClick={() => handleNumberButtonClick('2')}>2</button>
        <button onClick={() => handleNumberButtonClick('3')}>3</button>
      </div>
      <div>
        <button onClick={() => handleNumberButtonClick('4')}>4</button>
        <button onClick={() => handleNumberButtonClick('5')}>5</button>
        <button onClick={() => handleNumberButtonClick('6')}>6</button>
      </div>
      <div>
        <button onClick={() => handleNumberButtonClick('7')}>7</button>
        <button onClick={() => handleNumberButtonClick('8')}>8</button>
        <button onClick={() => handleNumberButtonClick('9')}>9</button>
      </div>
      <div>
        <button onClick={() => handleNumberButtonClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
      </div>
      <div>
        <p>Result: {result}</p>

      </div>
    </div>
  );
};

export default Calculator;
