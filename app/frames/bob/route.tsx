/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

const frameHandler = frames(async (ctx) => {
  return {
    image: "http://localhost:3000/1.jpeg",
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
