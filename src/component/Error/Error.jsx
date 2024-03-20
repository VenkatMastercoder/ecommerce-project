import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <p>{error.status}</p>
      <p>{error.data}</p>
      <p>Error Page</p>
    </>
  );
};

export default Error