import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
     fetchPosts();
  },[]);

  const fetchPosts = async () => {
     const data = await axios.get('api/posts');
     setPosts(data.data)
  }

  const fetchTodos = async () => {
    const data = await axios.get('api/todos');
    setPosts(data.data)
 }

  const renderPosts = () => {
    return (
      <>
       {posts.map((item)=>{
          return <li key={item.id} className='list-group-item'> { item.title }  </li>
       })}
      </>
    )
  }

  return (
    <div className="container">
        <button onClick={()=>fetchPosts()} className="btn btn-primary"> Fetch Posts </button> 
        <button onClick={()=>fetchTodos()} className="btn btn-info"> Fetch Todos </button>
        <ul className="list-group">
           {renderPosts()}
        </ul>      
    </div>
  );
}

export default App;
