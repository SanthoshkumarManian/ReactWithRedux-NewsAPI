import React from 'react';
import '../../index.css'
import { useHistory } from 'react-router-dom';

function Grid(props) {
    const history=useHistory()
    const handleClick=(value)=>{
      history.push(`/content/${value}`)
    }

    return (
        <div className="card" style={{ width: "200px" }} onClick={(e)=>handleClick(props.post.title)}>
            <img className="card-img-top" src={props.post.urlToImage} alt="description" style={{ width: "100%" }} />
            <div className="card-body">
                <h4 className="card-title" name="title">{props.post.title}</h4>
                <p className="card-text">{props.post.description}</p>

            </div>
      </div>
    )
}
export default Grid;