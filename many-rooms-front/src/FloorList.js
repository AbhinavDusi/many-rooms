import React, { Component } from 'react';
import FloorListItem from './FloorListItem';
import {floorList} from './FloorListInfo'; 

export default class FloorList extends Component {
    state = {
        floors: floorList
    }

    render() {
        return (
            <div> 
                {this.state.floors.map(
                    floor => 
                        <FloorListItem 
                            key = {floor.name}
                            floorItem = {floor}
                        />
                )}
            </div>
        );
    }
}