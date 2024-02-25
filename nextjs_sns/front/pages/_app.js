import PropTypes from "prop-types";
import Head from "next/head";

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

export default App;
