import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
  data: any;
};

export default function Users({ data }: HomeProps) {
  console.log(data);

  return (
    <>
      <div>hoge2</div>
      <div>hoge2</div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  // Props returned will be passed to the page component
  return { props: { data }, revalidate: 10 };
}
