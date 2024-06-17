/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { appURL } from "../../utils";

const frameHandler = frames(async (ctx) => {
  return {
    image: `${appURL()}/2.jpeg`,
    buttons: [
      <Button action="post" target={{ pathname: "/janis" }}>
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
