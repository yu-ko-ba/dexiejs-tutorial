import Head from "next/head";
import { AddFriendForm } from "@/components/AddFriendForm";
import { FriendList } from "@/components/FriendList";

// https://dexie.org/docs/Tutorial/React

export default function Home() {
  return (
    <>
      <Head>
        <title>Dexie.js Tutorial</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>My simple Dexie app</h1>
      <h2>Add Friend</h2>
      <AddFriendForm defaultAge={21} />

      <h2>Friend List</h2>
      <FriendList minAge={18} maxAge={65} />
    </>
  );
}
