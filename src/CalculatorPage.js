import React, { useEffect, useState } from 'react';

const title = "Calculator Page";

function CalculatorPage() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAddition = () => setResult(Number(num1) + Number(num2));
  const handleSubtraction = () => setResult(Number(num1) - Number(num2));
  const handleMultiplication = () => setResult(Number(num1) * Number(num2));

  useEffect(() => {
    test()
  },[])
  const handleDivision = () => {
    if (num2 !== 0) {
      setResult(Number(num1) / Number(num2));
    } else {
      setResult('Cannot divide by zero');
    }
  };

  function test(){
    var obj = {
      user:{
        name:'joy'
      }
    }
    if (obj && obj.user && obj.user.name) {
      console.log(obj.user.name);
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <input
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder='Enter first number'
        />
        <input
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder='Enter second number'
        />
      </div>
      <div>
        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
        <button onClick={handleMultiplication}>Multiply</button>
        <button onClick={handleDivision}>Divide</button>
      </div>
      <div>
        <h3>Result: {result !== null ? result : 'No calculation yet'}</h3>
      </div>
    </div>
  );
}

export default CalculatorPage;