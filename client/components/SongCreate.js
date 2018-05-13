import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {Link, hashHistory} from 'react-router';
import fetchSongs from 'react-router';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    console.log('props: ',this.props.mutate);
    console.log('title: ',this.state.title);

    this.props.mutate({
      variables: { title: this.state.title },
      // if you have variables, you would need to pass it into refetchQueries
      // as a second parameter.
      // you would only need to use refetchQueries if the query is not associated 
      // with this component.
      refetchQueries: [{ query: query }]
    }).then(() => hashHistory.push('/'))
  }
  
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input 
            onChange={(event) => this.setState({title: event.target.value})}
            value={this.state.title}
          />
        </form>        
      </div>
    )
  }
};

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);