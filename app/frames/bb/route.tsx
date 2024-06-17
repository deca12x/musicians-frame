/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { appURL } from "../../utils";

const frameHandler = frames(async (ctx) => {
  return {
    image: `${appURL()}/4.jpeg`,
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
