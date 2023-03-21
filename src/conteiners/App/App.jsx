import styles from './App.module.css';
import React from 'react';
import { getIpiResourse } from '../../utils/network'

import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  function handl1() {
    setCount(count + 1)
  }
  function handl2() {
    setCount(count - 1)
  }

  return (

    <div>
      <h1>count={count}</h1>
      <button count={count} onClick={handl1} />
      <button count={count} onClick={handl2} />
    </div>
  )
}

export default App;
