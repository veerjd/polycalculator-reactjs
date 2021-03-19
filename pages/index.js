import Head from "next/head";
import Layout from "@/components/Layout";
import Calc from "@/components/Calc";
import { API_URL } from "@/constants/polycalc";
import { useState } from "react";

export default function Home({ units }) {
  const warrior = units.filter((x) => x.code === "wa")[0];
  const activeAttackerState = useState({ ...warrior });
  const activeDefenderState = useState({ ...warrior });
  return (
    <Layout>
      <Head>
        <title>Polycalculator</title>
      </Head>
      <Calc
        units={units}
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
      units: units.map((unit) => ({
        ...unit,
        currenthp: unit.maxhp,
        vetNow: false,
        forceRetaliation: null,
        explodingNow: false,
        bonus: 1,
      })),
    },
  };
}
