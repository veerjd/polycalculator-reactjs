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
        <title>Polycalculator</title>
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
  return {
    props: {
      attUnits: units.map((unit) => ({
        ...unit,
        currenthp: unit.maxhp,
        vetNow: false,
        forceRetaliation: null,
        explodingNow: false,
        bonus: 1,
        img: `./assets/Attackers/${unit.name}.png`
      })),
      defUnits: units.map((unit) => ({
        ...unit,
        currenthp: unit.maxhp,
        vetNow: false,
        forceRetaliation: null,
        explodingNow: false,
        bonus: 1,
        img: `./assets/Attackers/${unit.name}.png`
      })),
    },
  };
}
