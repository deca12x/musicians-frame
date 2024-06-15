/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

const frameHandler = frames(async (ctx) => {
  return {
    image: "http://localhost:3000/1.jpeg",
    buttons: [
      <Button action="post" target={{ pathname: "/fail" }}>
        Bob Moses
      </Button>,
      <Button action="post" target={{ pathname: "/jimmy" }}>
        Bob Dylan
      </Button>,
      <Button action="post" target={{ pathname: "/fail" }}>
        Bob Marley
      </Button>,
      <Button action="post" target={{ pathname: "/fail" }}>
        Bob Sinclar
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
