import React, { Component } from 'react';
import './MoveCard.css';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';

class MoveCard extends Component {

    componentDidMount = () => {
        this.$node = $(this.refs.sortableListData);
        this.$node.push($(this.refs.sortableListData1))
        this.$node.push($(this.refs.sortableListData2))
        this.$node.sortable({
            connectWith: ".connectedSortable",
            'enable':'enable',
            
        });
    }

    render() {
        return (
            <div className="MoveCard">
                <div className="listWrapper minContentHeight">
                    <h5 className="listHeading">List 1</h5>
                    <ul ref="sortableListData" className="connectedSortable minContentHeight sortableListData">
                        <li className="cards">
                            <div>Item 1</div>
                            <div className="contents">
                                Content test Content test Content test Content test Content test Content test
                            </div>
                        </li>
                        <li className="cards">
                            <div>Item 2</div>
                            <div className="contents">
                            </div>
                        </li>
                        <li className="cards">
                            <div>Item 3</div>
                            <div className="contents">
                            </div>
                        </li>
                        <li className="cards">
                            <div>Item 4</div>
                            <div className="contents">
                                Content test Content test Content test Content test Content test Content test
                            </div>
                        </li>
                        <li className="cards">
                            <div>Item 5</div>
                            <div className="contents">
                            </div>
                        </li>
                        <li className="cards">
                            <div>Item 6</div>
                            <div className="contents">
                            </div>
                        </li>
                        <li className="cards">
                            <div>Item 7</div>
                            <div className="contents">
                                Content test Content test Content test Content test Content test Content test
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="listWrapper minContentHeight">
                    <h5 className="listHeading">List 2</h5>
                    <ul ref="sortableListData1" className="connectedSortable minContentHeight sortableListData">

                    </ul>
                </div>
                <div className="listWrapper minContentHeight">
                    <h5 className="listHeading">List 3</h5>
                    <ul ref="sortableListData2" className="connectedSortable minContentHeight sortableListData">

                    </ul>
                </div>
            </div>
        );
    }
}

export default MoveCard;
