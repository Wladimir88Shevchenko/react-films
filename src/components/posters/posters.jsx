import React from 'react';
import Poster from '../poster';
import Style from './postets.module.scss'

const Posters = ({data}) => {
    
    const allPosters = data
    .filter((post) => (post.Poster !== "N/A"))    
    .map(
        (post) => (<Poster key={post.imdbID} {...post} />)
    );

    return(
        <div className={Style.moviesWrapper}>
            {allPosters}
        </div>
    );
}

export default Posters;