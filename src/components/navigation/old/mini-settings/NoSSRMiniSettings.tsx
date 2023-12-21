"use client";
import dynamic from "next/dynamic";

const MiniSettingsModalNoSSR = dynamic(() => import("./MiniSettings"), {
  ssr: false,
});

export default () => <MiniSettingsModalNoSSR />;
