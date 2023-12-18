"use client";
import { Button, ThemePanel } from "@radix-ui/themes";
import React from "react";
import { useEffect, useState } from "react";

interface ThemePanelWindowsProps {}

export function ThemePanelWindows({}: ThemePanelWindowsProps) {
  const [open, setOpen] = useState(false);

  // quickly show/hide using ⌘C
  React.useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
        // handle close on esc key
        if(event.key === "Escape") {
            setOpen(false);
        }
      const isCmdC = event.ctrlKey && event.key === "c" && !event.shiftKey && !event.altKey;

      if (isCmdC && window.getSelection()?.toString() === "") {
        setOpen(!open);
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [open]);

  return (
    <div className="fixed bottom-0 right-0 z-[50]">
      {  !open?<Button onClick={() => setOpen(true)}>Theme panel</Button>:
      <ThemePanel hidden={!open} />}
    </div>
  );
}
