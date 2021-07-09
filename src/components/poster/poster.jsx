import React from 'react';
import Style from './poster.module.scss';

const Poster = (props) => {
    const {
        Poster: post,
        Title: title,
        Type: type,
        Year: year,
        imdbID: id,
    } = props;

    return (
        <div id={id} className={`row ${Style.row}`}>
            <div className={`card ${Style.card}`}>
                <div className="card-image">
                    <img src={post} alt={title} />
                    <span className="card-title">{title}</span>
                </div>
                <div className="card-content">
                    <p>{year} <span className="right">{type}</span></p>
                </div>
            </div>
        </div>

    );
}

export default Poster;