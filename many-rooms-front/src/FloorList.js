import React, { Component } from 'react';
import FloorListItem from './FloorListItem';
<<<<<<< HEAD
import {floorList} from './FloorListInfo'; 

export default class FloorList extends Component {
    state = {
        floors: floorList
=======

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

>>>>>>> b5b0d9b5003a08d476eece7e7b642a413a4b5836
    }

    render() {
        return (
            <div> 
                {this.state.floors.map(
                    floor => 
                        <FloorListItem 
                            key = {floor.name}
                            floorItem = {floor}
<<<<<<< HEAD
=======
                            onSelect = {this.handleSelection}
>>>>>>> b5b0d9b5003a08d476eece7e7b642a413a4b5836
                        />
                )}
            </div>
        );
    }
}