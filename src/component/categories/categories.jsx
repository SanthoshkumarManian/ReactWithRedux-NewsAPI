import React from 'react'
import {useDispatch} from 'react-redux';
import {fetchApi} from '../../reducer/newsSlice';


function  Category(){
    const dispatch=useDispatch();

    return(
        <div className="container">
            <ul className="list">
                <li className="items" ><a href="/#" className="general" onClick={()=>dispatch(fetchApi('general'))}>General</a></li>
                <li className="items" ><a href="/#" className="science" onClick={()=>dispatch(fetchApi('science'))}>Science</a></li>
                <li className="items"><a href="/#"  className="health" onClick={()=>dispatch(fetchApi('health'))}>Health</a></li>
                <li className="items" ><a href="/#" className="sports" onClick={()=>dispatch(fetchApi('sports'))}>Sports</a></li>
                <li className="items" ><a href="/#" className="technology" onClick={()=>dispatch(fetchApi('technology'))}>Technology</a></li>
                <li className="items" ><a href="/#" className="business" onClick={()=>dispatch(fetchApi('business'))}>Buisness</a></li>
                <li className="items" ><a href="/#" className="entertainment" onClick={()=>dispatch(fetchApi('entertainment'))}>Entertainment</a></li>
            </ul>
        </div>
    )
}

export default Category;