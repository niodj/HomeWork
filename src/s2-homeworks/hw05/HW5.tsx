import React from "react";
import { HashRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";

/*
 * 2 - в файле Sidebar.tsx дописать className так чтоб вешался класс s.active когда мы уже на соответствующей странице
 * 3 - застилизовать хэдэр и сайдбар в соответствии с дизайном
 * */

function HW5() {
  return (
    <HashRouter>
<Layout><div></div></Layout>

    </HashRouter>
  );
}

export default HW5;
