import React from 'react';
import SearchForm from './SearchForm';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to='/'>Agile - DevDeck101</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to='/releases' activeClassName="active">Releases</Link>
                        <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/backlog' activeClassName="active">Backlog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/sprints' activeClassName="active">Sprints</Link>
                    </li>
                </ul>
                <SearchForm />
            </div>
        </nav>
    );
}

export default Navbar;
