import React, { Component } from 'react';
import FloorListItem from './FloorListItem';

export default class FloorList extends Component {
    weightStyle = {
        fontWeight: 'normal'
    }

    state = {
        floors: [
            {name: 'Anime', weightStyle: {...this.weightStyle}},
            {name: 'Art', weightStyle: {...this.weightStyle}},
            {name: 'Culture', weightStyle: {...this.weightStyle}},
            {name: 'Fitness', weightStyle: {...this.weightStyle}},
            {name: 'Food', weightStyle: {...this.weightStyle}},
            {name: 'History', weightStyle: {...this.weightStyle}},
            {name: 'Humor', weightStyle: {...this.weightStyle}},
            {name: 'International', weightStyle: {...this.weightStyle}},
            {name: 'Literature', weightStyle: {...this.weightStyle}},
            {name: 'Miscellanous', weightStyle: {...this.weightStyle}},
            {name: 'Movies and TV', weightStyle: {...this.weightStyle}},
            {name: 'Music', weightStyle: {...this.weightStyle}},
            {name: 'Nature and Wildlife', weightStyle: {...this.weightStyle}},
            {name: 'Politics', weightStyle: {...this.weightStyle}},
            {name: 'Religion', weightStyle: {...this.weightStyle}},
            {name: 'Science', weightStyle: {...this.weightStyle}},
            {name: 'Sports', weightStyle: {...this.weightStyle}},
            {name: 'Technology', weightStyle: {...this.weightStyle}},
            {name: 'Video Games', weightStyle: {...this.weightStyle}}
        ]
    }

    handleSelection = selection => {
        const floors = [...this.state.floors];
        floors.forEach(floor => {
            floor.weightStyle.fontWeight = 'normal';
        }); 
        const index = floors.indexOf(selection); 
        floors[index] = {...selection};
        floors[index].weightStyle.fontWeight = 'bold';
        this.setState({floors}); 
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