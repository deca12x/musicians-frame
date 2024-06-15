/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

const frameHandler = frames(async (ctx) => {
  return {
    image: "http://localhost:3000/3.jpeg",
    buttons: [
      <Button action="post" target={{ pathname: "/fail" }}>
        Joni Mitchell
      </Button>,
      <Button action="post" target={{ pathname: "/fail" }}>
        Nina Simone
      </Button>,
      <Button action="post" target={{ pathname: "/fail" }}>
        Stevie Nicks
      </Button>,
      <Button action="post" target={{ pathname: "/bb" }}>
        Janis Joplin
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
