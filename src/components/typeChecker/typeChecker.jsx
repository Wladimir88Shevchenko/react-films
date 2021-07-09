import React from 'react';
import Style from './typeChecker.module.scss';

const TypeChecker = ({ changeTypeMovie, whatChoosen }) => {

    return (
        <div className={Style.wrapper}>
            <label>
                <input
                    onChange={changeTypeMovie}
                    id='all'
                    className="with-gap"
                    name="typeMovie"
                    type="radio"
                    checked={whatChoosen === 'all'} />
                <span>All</span>
            </label>
            <label>
                <input
                    onChange={changeTypeMovie}
                    id='movie'
                    className="with-gap"
                    name="typeMovie"
                    type="radio" 
                    checked={whatChoosen === 'movie'}/>
                <span>Movie only</span>
            </label>
            <label>
                <input
                    onChange={changeTypeMovie}
                    id='series'
                    className="with-gap"
                    name="typeMovie"
                    type="radio" 
                    checked={whatChoosen === 'series'}/>
                <span>Series only</span>
            </label>
        </div>
    );
}

export default TypeChecker;