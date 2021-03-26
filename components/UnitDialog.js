import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    border: '#F2F200',
  },
  img: {
    width: '100%',
    height: '100%',
  },
}));

export default function DialogGrid({
  id,
  placeholder,
  units,
  activeUnit,
  setActive,
  open,
  handleClose,
}) {
  const classes = useStyles();

  const handleListItemClick = (value) => {
    handleClose(value)
    setActive(value)
  };

  return (
    <Dialog fullScreen onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Choose your {id}</DialogTitle>
      <GridList cellHeight={160} className={classes.gridList} cols={4}>
        {units.map((unit) => (
          <GridListTile onClick={() => handleListItemClick(unit)} key={unit.name} cols={unit.cols || 1}>
            <img className={classes.img} src={unit.img} alt={unit.name} />
            <GridListTileBar
              title={unit.name}
            />
          </GridListTile>
        ))}
      </GridList>
    </Dialog >
  );
}

function compare(a, b) {
  if (a.unit_type_priority < b.unit_type_priority) return -1;
  if (a.unit_type_priority > b.unit_type_priority) return 1;

  return 0;
}
