import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import PageFooter from "../components/common/PageFooter";
import Compliances from "../components/common/Compliances";

function MainLayout() {
  return (
    <Fragment>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <div>
        <Compliances />
      </div>
      <PageFooter />
    </Fragment>
  );
}

export default MainLayout;
