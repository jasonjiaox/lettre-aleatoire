"use client"

import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import * as React from "react";

export function AleatoireLettre() {

  const [result, setResult] = React.useState<string>("a")

  const generateRandomLetter = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let randomIndex = Math.floor(Math.random() * letters.length);
    setResult(letters[randomIndex])
  }

  return (
    <>
      <div className="rounded-xl bg-muted px-4 py-4 text-[10rem] font-semibold leading-none">
        {result}
      </div>

      <button onClick={generateRandomLetter} className={cn(buttonVariants({size: 'lg'}))} data-umami-event="Generer button">
        Générer
      </button>
    </>
  )
}
