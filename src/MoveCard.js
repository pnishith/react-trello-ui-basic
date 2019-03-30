import React, { Component } from 'react';
import './MoveCard.css';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';
import { TRELLO_ITEMS } from './data';

class MoveCard extends Component {

    componentDidMount = () => {
        $(function () {
            $(".sortableListData").sortable({
                connectWith: ".sortableListData",
                update: function (event, ui) {
                    var changedList = this.id;
                    var order = $(this).sortable('toArray');

                    TRELLO_ITEMS.forEach((element, i) => {
                        if (element.ref == changedList) {
                            TRELLO_ITEMS[i].items = order.map((item) => JSON.parse(item))
                        }
                    });

                    console.log({
                        id: changedList,
                        positions: order,
                        TrelloItems: TRELLO_ITEMS
                    });
                }
            });
        });
    }

    renderTrelloItems = () => {
        return TRELLO_ITEMS.map((item, i) => {
            console.log(item);
            if (this.$node) this.$node.push($(this.refs[item.ref]));

            return (
                <div className="listWrapper minContentHeight" key={item.ref}>
                    <h5 className="listHeading">{item.listName}</h5>
                    <ul id={item.ref} ref={item.ref} className="connectedSortable minContentHeight sortableListData">
                        {item.items.length > 0
                            ? item.items.map((cardItem, i) => {
                                return (
                                    <li id={JSON.stringify(cardItem)} className="cards" key={i} onDragStart={(e) => console.log(e)} onDrop={(e) => { this.updatedList(e, cardItem) }}>
                                        <div>{cardItem.cardName}</div>
                                        <div className="contents">
                                            {cardItem.description}
                                        </div>
                                    </li>
                                )
                            })
                            : null
                        }
                    </ul>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="MoveCard">
                {this.renderTrelloItems()}
            </div>
        );
    }
}

export default MoveCard;
