import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
  data: any;
};

export default function Home({ data }: HomeProps) {
  console.log(data);
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/hello");
    console.log(res);
  };

  return (
    <>
      <button onClick={getData}>button</button>
      <div>hoge</div>
      <div>hoge</div>
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   const data = await res.json();

//   // Props returned will be passed to the page component
//   return { props: { data } };
// }

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  console.log(data);

  // Pass data to the page via props
  return { props: { data } };
}
