import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/NPWjhLF4iZU/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDk7Skrt6eSrM6I4qH72f33Kpv-ig" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time :'00.00',
    title : 'Title Here',
    desc : 'x ditonton, xx hari yang lalu'
}

export default YouTubeComp;