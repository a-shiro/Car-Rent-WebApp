import { useState } from "react";
import { validCodes } from "../codes";

export const AccessModal = ({ setAcessGranted }) => {
  const [userInput, setUserInput] = useState("");

  const grantAccess = (e) => {
    e.preventDefault();

    if (validCodes.includes(userInput)) {
      setAcessGranted(true);
    }
  };

  return (
    <div className="access-form-wrapper-admin">
      <div className="form-wrapper-admin">
        <h1>Enter code</h1>
        <form onSubmit={grantAccess}>
          <input
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            value={userInput}
            placeholder="code"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
