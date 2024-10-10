import { useContext } from "react"
import { UserContext } from "./context/UserContext";
import { json } from "react-router-dom";

export const LoginPage = () => {
    const algo = useContext(UserContext);
    console.log(algo);


    return (
      <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        {JSON.stringify(algo.user, null, 3)}
      </pre>
      <button className="btn btn-primary">
        Set user
      </button>
      </>
    )
  }
  