import React from 'react';
import { useParams } from 'react-router-dom'
import img from '../../asset/grid.jpg';
import store from '../../app/store';

function Content() {
    const parm = useParams();
    const state=store.getState().news.data;
    var value;
    state.forEach(item=>{
        if(item.title===parm.id){
           value=item;
        }
    })
    return (
        <div className="content-box">
             <h2>{value.title}</h2>
            <img src={value.urlToImage} alt='news view images' className="content-image"></img>
            <p className="content-description">{value.content}</p>
        </div>
    )
}


export default Content;