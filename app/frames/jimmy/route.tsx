/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

const frameHandler = frames(async (ctx) => {
  return {
    image: "http://localhost:3000/2.jpeg",
    buttons: [
      <Button action="post" target={{ pathname: "/fail" }}>
        Jimmy Page
      </Button>,
      <Button action="post" target={{ pathname: "/fail" }}>
        Jimmy Hendrix
      </Button>,
      <Button action="post" target={{ pathname: "/fail" }}>
        Jimmy Buffet
      </Button>,
      <Button action="post" target={{ pathname: "/fail" }}>
        Jimmy Reed
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
