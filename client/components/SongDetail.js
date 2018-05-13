import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {

    const { song } = this.props.data;

    // The loading goes very fast so this may not 
    // even be needed as it has a bit of a 'flash' effect.
    if(!song) { return <div>Loading...</div>; }

    console.log(this.props);
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        {/*We need to take this.props.param.id and pass it down as the songId*/}
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    )
  }
};

export default graphql(fetchSong, {
  // This is how you pass variables to queries
  options: (props) => { return { variables: { id:props.params.id } } }
})(SongDetail);