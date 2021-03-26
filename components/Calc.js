import Unit from "@/components/Unit";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "10px 0%",
  },
  button: {
    margin: "10px",
  },
});

export default function Calc({
  attUnits,
  defUnits,
  activeAttackerState: [activeAttacker, setActiveAttacker],
  activeDefenderState: [activeDefender, setActiveDefender],
}) {
  const classes = useStyles();

  const [attackers, setAttackers] = useState([]);
  const [result, setResult] = useState({
    attacker: {},
    defender: {},
  });

  const handleFight = (event) => {
    console.log("activeAttacker:", activeAttacker);
    console.log("activeDefender:", activeDefender);
  };

  return (
    <div>
      <Unit
        id="attacker"
        placeholder="Attacker"
        units={attUnits}
        activeUnit={activeAttacker}
        setActive={setActiveAttacker}
      />

      <Unit
        id="defender"
        placeholder="Defender"
        units={defUnits}
        activeUnit={activeDefender}
        setActive={setActiveDefender}
      />

      <Button
        className={classes.button}
        id="calc"
        onClick={handleFight}
        name="Calc"
        variant="contained"
        color="primary"
      >
        Calc!
      </Button>
      <Button
        className={classes.button}
        id="multi"
        onClick={() => {
          alert("Not implemented yet!");
        }}
        name="Multi"
        variant="contained"
        color="secondary"
      >
        Multi
      </Button>
    </div>
  );
}
