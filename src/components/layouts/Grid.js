import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  subheader: {
    width: '100%',
  },
});

import bike from '/static/images/grid-list/bike.jpg';
import breakfast from '/static/images/grid-list/breakfast.jpg';
import burgers from '/static/images/grid-list/burgers.jpg';

const tileData = [
  {
    img: bike,
    title: 'Bike',
    author: 'author',
    featured: true,
  },
  {
    img: breakfast,
    title: 'Breakfast',
    author: 'author',
    featured: true,
  },
  {
    img: burgers,
    title: 'Burgers',
    author: 'author',
    featured: true,
  }

];

function ImageGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
