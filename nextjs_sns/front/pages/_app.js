import PropTypes from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Next SNS</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.element.isRequired,
};

export default wrapper.withRedux(App);
