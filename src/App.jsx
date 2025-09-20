// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Counter from './counter';
import Batsman from './batsman'
import Users from './users';
import Friedns from './friends'
import './App.css'

import { Suspense } from 'react';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriedns = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {

  const friednsPromise = fetchFriedns();

  function handleClick() {
    alert('I am clicked.')
  }

  const handleClick3 = () => {
    alert('Clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }
  

  return (
    <>
      <h1>Vite + React</h1>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Friends coming</h3>}>
        <Friedns friednsPromise={friednsPromise}></Friedns>
      </Suspense>
      

      <Batsman></Batsman>
      <Counter></Counter>


      {/* <button>Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert('Clicked2')
      }}>Click Me</button>

      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert('Click 4')}>Click Me 4</button>

      <button onClick={() => handleAdd5(7)}>Click Add 5</button>
    </>
  )
}

export default App
