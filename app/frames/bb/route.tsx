/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

const frameHandler = frames(async (ctx) => {
  return {
    image: "http://localhost:3000/4.jpeg",
    buttons: [
      <Button action="post" target={{ pathname: "/fail" }}>
        Muddy Waters
      </Button>,
      <Button action="post" target={{ pathname: "/win" }}>
        B.B. King
      </Button>,
      <Button action="post" target={{ pathname: "/fail" }}>
        Ray Charles
      </Button>,
      <Button action="post" target={{ pathname: "/fail" }}>
        Robert Johnson
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
