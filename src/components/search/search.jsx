import React, { Component } from 'react';
import Style from './search.module.scss'

export default class Search extends Component {
    state = {
        search: '',
    }

    enterSearch = (e) => {
        if(e.key === 'Enter'){
            this.props.searchFilm(this.state.search, this.props.type);
        }
    }

    render() {
        const { searchFilm, type } = this.props;
        const { search } = this.state;

        return (
            <div className="row">
                <div className={Style.greedWrapper}>
                    <input
                        placeholder="Search text"
                        type="search"
                        className="validate"
                        value={this.state.sarch}
                        onChange={(e) => {
                            this.setState({
                                search: e.target.value
                            })
                        }}
                        onKeyDown={this.enterSearch}
                    />
                    <button 
                        className="btn right" 
                        onClick={() => searchFilm(search, type)}
                    >Search</button>
                </div>
            </div>
        );
    }
}