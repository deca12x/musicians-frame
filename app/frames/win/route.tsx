/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { appURL } from "../../utils";

const frameHandler = frames(async (ctx) => {
  return {
    image: `${appURL()}/kendrick.png`,
    buttons: [
      <Button action="post" target={{ pathname: "/" }}>
        Start Again
      </Button>,
      <Button
        action="link"
        target={"https://github.com/deca12x/musicians-frame"}
      >
        Code
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
