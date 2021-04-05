import Unit from "@/components/Unit";
import Result from "@/components/Result";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { API_URL } from "@/constants/polycalc";

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

  const handleFight = async (event) => {
    const result1 = await (await fetch(`${API_URL}/calc?a=${activeAttacker.code} ${activeAttacker.currenthp},${activeDefender.code} ${activeDefender.currenthp}`)).json();
    console.log(result1)
    result1.attackers = result1.attackers[0]
    setResult(result1)
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
      <Result
        result={result}
      />
    </div>
  );
}
