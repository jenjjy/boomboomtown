import React, { Component } from 'react';
import Items from './Items';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import FullScreenLoader from '../../components/Loader/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_ITEMS_QUERY } from '../../apollo/queries';
import { ViewerContext } from '../../context/ViewerProvider';
import PropTypes from 'prop-types';

class ItemsContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => (
          <Query query={ALL_ITEMS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <FullScreenLoader inverted />;
              if (error) return <p>{`Error! ${error.message}`}</p>;

              return (
                <Items
                  classes={this.props.classes}
                  items={data.items}
                  viewer={viewer}
                />
              );
            }}
          </Query>
        )}
      </ViewerContext.Consumer>
    );
  }
}

ItemsContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemsContainer);
