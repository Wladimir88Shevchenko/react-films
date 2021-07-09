import React, { Component } from 'react';
import Posters from '../../components/posters';
import Search from '../../components/search';
import Loader from '../../components/loader';
import style from './main.module.scss';
import TypeChecker from '../../components/typeChecker';


export default class Main extends Component {
    state = {
        wordkey: 'mortal',
        movies: [],
        goodSearchKey: true,
        type: 'all',
    }

    componentDidMount = () => {
        this.getMovies();
    }

    changeTypeMovie = (e) => {
        this.setState({ type: e.target.id })
        this.searchFilm(this.state.wordkey, e.target.id);
    }

    searchFilm = (word, type = 'all') => {
        this.setState({ wordkey: word });
        fetch(`http://www.omdbapi.com/?apikey=570dc9d3&s=${word}${type !== 'all' ? `&type=${type}` : ''}`)
            .then((response) => response.json())
            .then((data) => data.Search !== undefined ?
                this.setState({ movies: data.Search, goodSearchKey: true }) :
                this.setState({ goodSearchKey: false }));
    }

    getMovies = () => {
        fetch('http://www.omdbapi.com/?apikey=570dc9d3&s=mortal')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    render() {
        const { movies } = this.state;

        return (
            <div className={`container ${style.mainContainer}`}>
                <Search
                    searchFilm={this.searchFilm}
                    type={this.state.type} />
                <TypeChecker
                    changeTypeMovie={this.changeTypeMovie}
                    whatChoosen={this.state.type} />
                {this.state.goodSearchKey ? (
                    <div>
                        {movies.length ? (<Posters data={movies} />) : (<Loader />)}
                    </div>
                ) :
                    (
                        <div>
                            <h3>We could not find your movie. Sorry. And although we have already started filming a film with that name personally for you. But it might be better if you look for another movie :)</h3>
                        </div>
                    )}
            </div>
        );
    }
}