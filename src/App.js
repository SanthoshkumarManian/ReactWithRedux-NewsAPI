import React from 'react';

import './App.css';
import Grid from './component/grid/grid';
import Category from './component/categories/categories';
import {useDispatch,useSelector} from 'react-redux';
import {fetchApi,getData} from './reducer/newsSlice';


function App() {
    const dispatch=useDispatch();
    const data = useSelector(getData);
    const post = data.data;
    const onclick=(e)=>{
      e.preventDefault();
      const value=e.target.text.value;
      dispatch(fetchApi(value));
    }
  return (
    <div className="App">
        <form className="form" onSubmit={(e)=>onclick(e)}>
            <input className="search_input" name="text"></input>
            <button type="submit">search</button>
        </form>
        <Category/>
        <div className="container">
     
        {
            post.map(element=>{
              return <Grid key={element.title} post={element} />
            })
           
        }  
        </div>
    </div>
  );
}

export default App;
