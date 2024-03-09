
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';


function App() {
  
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = ()=>{
    alert('button2 clicked');
  }
  const handleClick4 = (num =>{
    alert(num + 5);
  })
 
  return (
    <>
      <Friends></Friends>
      {/* <Users></Users> */}
      {/* <Team></Team> */}
      {/* <Counter></Counter> */}
      
      {/* <h1>React core concepts 2</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('third clicked')}}>Third click</button>
      <button onClick={()=>handleClick4()}>Four</button> */}
    </>
  )
}

export default App
