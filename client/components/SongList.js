import React from 'react';
import PropTypes from 'prop-types';
// we need graphql-tag to handle query syntax. It is
// a helper that allows us to write queries.
import gql from 'graphql-tag';

const propTypes = {};

const defaultProps = {};

export default class SongList extends React.Component {
    render() {
        return (
            <div>
                song list
            </div>
        );
    }
}

const query = gql`
    {
        songs {
            title
        }
    }
`;

 SongList.propTypes = propTypes;
 SongList.defaultProps = defaultProps;