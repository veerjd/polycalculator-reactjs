import { useState } from 'react'
import Button from '@material-ui/core/Button';
import UnitDialog from "@/components/UnitDialog";
import HpSlider from "@/components/HpSlider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "10px 0%",
  },
});

export default function Unit({
  id,
  placeholder,
  units,
  activeUnit,
  setActive
}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [hp, setHp] = useState(activeUnit.currenthp);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    if (value.name) {
      setHp(value.maxhp)
      setActive(value)
    }
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        {activeUnit.name}
      </Button>
      <UnitDialog
        id={id}
        className={classes.root}
        placeholder={placeholder}
        units={units}
        activeUnit={activeUnit}
        setActive={setActive}
        open={open}
        handleClose={handleClose}
      />
      <HpSlider hp={hp} setHp={setHp} activeUnit={activeUnit} setActive={setActive} />
    </div>
  );
}
