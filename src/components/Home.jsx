import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from './actions/index'
import '../styles/home.css'

function Home() {
  const [data, setdata] = useState('');
  const list = useSelector((state) => state.todoreducer.list);
  const dispatch = useDispatch();
  let date = new Date().toLocaleDateString();

  return (
    <div className='wrapper'>
      <span className='date' >&#128197; {date}</span>
      <h2> &#9997; Add Your List Item Here</h2>
      <div className="input-group">
        <input type="text" className="input" id="add-item" name="add-item" placeholder="Add Items..." autoComplete="off" value={data} onChange={e => setdata(e.target.value)} required />
        <input className="button--submit" value="Add" type="submit" onClick={() => dispatch(addTodo(data), setdata(''))} />
      </div>
      {
        list.length>0 ? 
        <div className="display">
        {
          list.map((item) => {
            return (
              <div className="show-Items" key={item.id}>
                <h3>{item.data}</h3>
                <button type="submit" className='delete-btn' onClick={() => dispatch(deleteTodo(item.id))} >Delete</button>
              </div>
            )
          })
        }
        <button type="submit" className="btn-remove" onClick={() => dispatch(removeTodo())} >Remove All</button>
      </div>
      :
      <h2>Add some task &#128512;</h2>
      }
      
      
    </div>
  )
}

export default Home;