import React, {Component} from 'react';
import NoteList from './NoteList.jsx'

class Notes  extends Component {
    render() {
        return (
            <div>
                <p>对{this.props.username}评论</p>
                <NoteList notes={this.props.notes} />
            </div>
        );
    }
}

export default Notes ;