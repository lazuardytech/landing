"use client";

import Maintenance from "@/components/ui/maintenance";
import Loader from "@/components/ui/loader";
import Header from "@/components/ui/work/header";
import React, { useEffect, useState, useRef } from "react";
import { isMaintenanceMode } from "@/lib/config";
import { performHideLoader } from "@/lib/utils";
import { projects } from "./data";
import Double from "@/components/ui/work/double";
import style from "@/components/ui/work/double/style.module.scss";

const loaderDelay = 2000; // in ms;

export default function Page() {
  const header = useRef();
  const loader = useRef();
  const maintenance = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // check if components is ready
    if (!header.current) return;

    // check if the page is loaded
    if (!loaded) {
      setTimeout(() => {
        performHideLoader(loader);
        setLoaded(true);
        header.current.style.top = 0;
      }, loaderDelay);
    }
  });

  if (isMaintenanceMode()) {
    return (
      <>
        <Maintenance ref={maintenance} />
      </>
    );
  }

  return (
    <>
      <Header ref={header} loader={loader} />
      <div className={style.gallery}>
        <Double projects={[projects[0], projects[1]]} />
        <Double projects={[projects[2], projects[3]]} reversed={true} />
        <Double projects={[projects[4], projects[5]]} />
        <Double projects={[projects[6], projects[7]]} reversed={true} />
      </div>
      <Loader ref={loader} />
    </>
  );
}
