import React from 'react';

const SearchForm = () => {
    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    );
}

export default SearchForm;