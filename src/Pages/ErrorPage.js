import { Fragment } from "react";
import NavBar from "../components/common/NavBar";
import PageFooter from "../components/common/PageFooter";
import under_construction from "../images/under-construction.png";
function ErrorPage() {
  return (
    <Fragment>
      <NavBar />
      <main className=" flex justify-center py-20 ml-72">
        <img src={under_construction} alt="Website under construction" className=""/>
      </main>
      <PageFooter />
    </Fragment>
  );
}

export default ErrorPage;
