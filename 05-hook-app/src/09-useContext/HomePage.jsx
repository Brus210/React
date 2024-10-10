import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
    const algo = useContext(UserContext);
    console.log(algo);

    return (
      <>
        <h1>HomePage: <small>{algo.user?.name}</small></h1>
        <hr />

        <pre>
        {JSON.stringify(algo.user, null, 3)}
      </pre>
      </>
    )
  }
  