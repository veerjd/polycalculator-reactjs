import Head from "next/head";
import Layout from "@/components/Layout";
import Calc from "@/components/Calc";
import { API_URL } from "@/constants/polycalc";
import { useState } from "react";

export default function Home({ attUnits, defUnits }) {
  const attWarrior = attUnits.filter((x) => x.code === "wa")[0];
  const defWarrior = defUnits.filter((x) => x.code === "wa")[0];
  const activeAttackerState = useState({ ...attWarrior });
  const activeDefenderState = useState({ ...defWarrior });
  return (
    <Layout>
      <Head>
        <title>Modern | PolyCalculator</title>
      </Head>
      <Calc
        attUnits={attUnits}
        defUnits={defUnits}
        activeAttackerState={activeAttackerState}
        activeDefenderState={activeDefenderState}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const units = await (await fetch(`${API_URL}/units`)).json();
  const unitsCanAttack = units.filter(x => x.att > 0)

  return {
    props: {
      attUnits: unitsCanAttack.map((unit) => ({
        ...unit,
        currenthp: unit.maxhp,
        vetNow: false,
        forceRetaliation: null,
        explodingNow: false,
        bonus: 1,
        img: `./assets/img/Attackers/${unit.name}.png`
      })),
      defUnits: units.map((unit) => ({
        ...unit,
        currenthp: unit.maxhp,
        vetNow: false,
        forceRetaliation: null,
        explodingNow: false,
        bonus: 1,
        img: `/assets/img/Defenders/${unit.name}.png`
      })),
    },
  };
}
