/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

const frameHandler = frames(async (ctx) => {
  return {
    image: "http://localhost:3000/kendrick.png",
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
