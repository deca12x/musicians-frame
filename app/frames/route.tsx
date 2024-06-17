/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { appURL } from "../utils";
// import { appURL } from "../utils";

const frameHandler = frames(async (ctx) => {
  // const counter = ctx.message
  //   ? ctx.searchParams.op === "+"
  //     ? ctx.state.counter + 1
  //     : ctx.state.counter - 1
  //   : ctx.state.counter;

  return {
    image: `${appURL()}/music-intro-frame.png`,
    buttons: [
      <Button action="post" target={{ pathname: "/bob" }}>
        Start Quiz
      </Button>,
      <Button
        action="link"
        target={"https://github.com/deca12x/musicians-frame"}
      >
        Code
      </Button>,
    ],
    // state: { counter: counter },
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
