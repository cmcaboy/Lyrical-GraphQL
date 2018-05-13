import React from 'react';
// we need graphql-tag to handle query syntax. It is
// a helper that allows us to write queries.
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {Link} from 'react-router';
import fetchSongs from '../queries/fetchSongs';

class SongList extends React.Component {

    onSongDelete(id) {
        this.props.mutate({
            variables: { id }
        })
        // this.props.data is automatically added to our props by the apollo library
        // the refetch function automatically reruns any queries associated with this component
        .then(() => this.props.data.refetch());
    }

    renderSongs() {
        return this.props.data.songs.map(({id,title}) => {
            return (
                <li key={id} className={"collection-item"}>
                    <Link to={`songs/${id}`}>
                        {title}
                    </Link>
                    <i
                        className="material-icons"
                        onClick={() => this.onSongDelete(id)}
                    >delete</i>
                </li>
            )
        })
    }
    render() {
        //console.log('props: ',this.props);
        if(this.props.data.loading) { return <div>Loading...</div>; }
        return (
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link 
                    to="/songs/new"
                    className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
}

const query = fetchSongs;

const mutation = gql`
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id) {
        id
        }
    }
`;

export default graphql(mutation)(graphql(query)(SongList));
