/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { appURL } from "../../utils";

const frameHandler = frames(async (ctx) => {
  return {
    image: `${appURL()}/3.jpeg`,
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
