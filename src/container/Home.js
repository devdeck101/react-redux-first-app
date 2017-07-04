import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import { hashHistory } from 'react-router'

export default class Home extends Component {

    releaseHomeCard = {
        title: 'Release Planning',
        text: 'Define your Release',
        action: () => hashHistory.push('/releases')
    };
    BacklogHomeCard = {
        title: 'Backlog',
        text: 'Input your Release',
        action: () => hashHistory.push('/backlog')
    };
    sprintHomeCard = {
        title: 'Sprint Planning',
        text: 'Define your Sprints',
        action: () => hashHistory.push('/sprints')
    };

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard {...this.releaseHomeCard} />
                    <HomeCard {...this.BacklogHomeCard} />
                    <HomeCard {...this.sprintHomeCard} />                   
                </div>
            </div>
        )
    }
}