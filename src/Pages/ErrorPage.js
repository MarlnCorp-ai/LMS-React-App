import { Fragment } from "react";
import NavBar from "../components/common/NavBar";
import PageFooter from "../components/common/PageFooter";

function ErrorPage() {
  return (
    <Fragment>
      <NavBar />
      <main>
        <h1>Page Not Found!!</h1>
      </main>
      <PageFooter />
    </Fragment>
  );
}

export default ErrorPage;
