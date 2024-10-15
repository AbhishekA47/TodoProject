// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Toast from './Toast';
import Example from './Toast1';
import React,{Suspense,useState} from 'react';
// import Toastify from './toastify';
// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
// import AddTask from './addTask';
// import TodoList from './TodoList';
// import Edit from './edit';


const LazyComponent = React.lazy(()=>import ('./MyComponent'));

const App = ()=> {
  const [showComponent,setShowComponent]= useState(false)

  return (
    
    <div style={{textAlign:'center',marginTop:'50px'}}>
      {/* <h1>Redux Counter App</h1> */}
      <h1>Code Splitting Example</h1>
      <button onClick={()=>setShowComponent(true)}>Load Component</button>

      {showComponent &&(
        <>
        <Suspense fallback={<div>Loading...</div>}/>
       <LazyComponent/>
       <Suspense/>
       </>

      )}
      {/* <Counter/>
      <Toast/>
      <Example/> */}
      {/* <Toastify/> */}
      {/* <Router>
        <Link to='/AddTask'>AddTask</Link>
        <Link to='/TodoList'>TodoList</Link>
         <Link to='/edit'></Link>
        <Routes>
          <Route path='/addTask' element={<AddTask/>}/>
          <Route path='/TodoList' element={<TodoList/>}/>
          <Route path='/edit/:taskid' element={<Edit/>}/>
          
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
