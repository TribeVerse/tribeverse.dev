import Summary from "@/components/Summary";
import { getContactData } from "@/libs/data/contact";
import { Contact } from "@/libs/data/types";
import { NextPage } from "next";
import Head from "next/head";

type HomePageProps = {
  contacts: Contact[];
};

const HomePage: NextPage<HomePageProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>TribeVerse Labs | Free Software</title>
      </Head>

      <main className="page-main">
        <h1>Hello TribeVersers, welcome to the tribe!</h1>
      </main>
    </>
  );
};

export const getStaticProps = () => {
  const contacts = getContactData();

  return {
    props: {
      contacts,
    },
  };
};

export default HomePage;
