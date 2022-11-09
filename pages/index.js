import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ItemList } from "../src/component/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home({ list }) {
  console.log("data", list);
  return (
    <div>
      <Head>
        <title>소히</title>
      </Head>
      <>
        <Header as="h3">베스트 상품</Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3">신 상 품</Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
