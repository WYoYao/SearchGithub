import React, {Component} from 'react';

class NoteList extends Component {
    render() {
        let notes = this.props.notes.map((note, index) => {
            return <li className="list-group-item" key={index}>{note}</li>
        })
        return (
            <ul className="list-group">
                {notes}
            </ul>
        );
    }
}

export default NoteList;