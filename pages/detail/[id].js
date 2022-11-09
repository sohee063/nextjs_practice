import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Item } from "../../src/component/Item";

const DetailPost = ({ item, name }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <h1>{name} 환경 입니다.</h1>
          <Item item={item} />
        </>
      )}
    </>
  );
};

/* SSR 검색엔진이나 공유할때 사용 가능!!! */

export default DetailPost;

export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    // paths: [
    //   { params: { id: "495" } },
    //   { params: { id: "845" } },
    //   { params: { id: "843" } },
    // ],
    paths: data.slice(0, 9).map((el) => ({
      params: {
        id: el.id.toString(),
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
