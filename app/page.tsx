import { fetchMetadata } from "frames.js/next";
import type { Metadata } from "next";
import Link from "next/link";
import { createDebugUrl } from "./debug";
import { appURL, currentURL } from "./utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "frames.js starter",
    description: "This is a frames.js starter template",
    other: {
      ...(await fetchMetadata(new URL("/frames", appURL()))),
    },
  };
}

// This is a react server component only
export default async function Home() {
  // then, when done, return next frame
  return <div className="p-4">hello</div>;
}
