import React, { Component } from 'react';
import FloorListItem from './FloorListItem';

export default class FloorList extends Component {
    state = {
        floors: [
            {name: 'Anime'},
            {name: 'Art'},
            {name: 'Culture'},
            {name: 'Fitness'},
            {name: 'Food'},
            {name: 'History'},
            {name: 'Humor'},
            {name: 'International'},
            {name: 'Literature'},
            {name: 'Miscellanous'},
            {name: 'Movies and TV'},
            {name: 'Music'},
            {name: 'Nature and Wildlife'},
            {name: 'Politics'},
            {name: 'Religion'},
            {name: 'Science'},
            {name: 'Sports'},
            {name: 'Technology'},
            {name: 'Video Games'}
        ]
    }

    handleSelection = selection => {

    }

    render() {
        return (
            <div> 
                {this.state.floors.map(
                    floor => 
                        <FloorListItem 
                            key = {floor.name}
                            floorItem = {floor}
                            onSelect = {this.handleSelection}
                        />
                )}
            </div>
        );
    }
}