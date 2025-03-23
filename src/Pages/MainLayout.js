import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import PageFooter from "../components/common/PageFooter";

function MainLayout() {
  return (
    <Fragment>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <PageFooter />
    </Fragment>
  );
}

export default MainLayout;
