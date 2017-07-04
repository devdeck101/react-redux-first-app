import React, { Component } from 'react';
import ReleaseForm from '../ui/ReleaseForm';
import 'whatwg-fetch'


export default class Releases extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            releases: [
                {
                    id: 1,
                    name: 'Release 1',
                    startDate: '01/02/2018',
                    endDate: '12/02/2018'
                },
                {
                    id: 2,
                    name: 'Release 2',
                    startDate: '01/02/2019',
                    endDate: '12/02/2019'
                },
                {
                    id: 3,
                    name: 'Release 3',
                    startDate: '01/02/2020',
                    endDate: '12/02/2020'
                }
            ]
        }
    }

/*
componentDidMount() {
        console.log('GrandChild did mount.');
        fetch('/releases')
            .then((response) => {
                return response.json()
            }).then((json) => {
                this.setState(json)
            }).catch((ex) => {
                console.log('parsing failed', ex)
            })
    }
*/

    handleSubmit(e, { releaseName, startDate, endDate }) {
        e.preventDefault();
        const currentState = this.state;
        var newRelease = {
            id: this.state.releases.length + 1,
            name: releaseName,
            startDate: startDate,
            endDate: endDate
        }
        this.setState({
            releases: currentState.releases.concat(newRelease)
        });
    }
    /*
    <form onSubmit={this.handleSubmit.bind(this)} className="form-inline">
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">Release name</div>
                            <input type="text" className="form-control" id="inlineFormInputGroup" ref="releaseName" required></input>
                        </div>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">Start date</div>
                            <input type="text" className="form-control" id="inlineFormInputGroup" ref="startDate" required></input>
                        </div>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div className="input-group-addon">End date</div>
                            <input type="text" className="form-control" id="inlineFormInputGroup" ref="endDate" required></input>
                        </div>
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </form>
                    */
    render() {
        return (
            <div className="container" style={{ marginTop: '10px' }}>
                <h1>Releases</h1>
                <br />
                <ReleaseForm submitHandler={this.handleSubmit} />

                <br />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Release Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((release, index) => {
                            return (
                                <tr key={release.id}>
                                    <th>{++index}</th>
                                    <td>{release.name}</td>
                                    <td>{release.startDate}</td>
                                    <td>{release.endDate}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}