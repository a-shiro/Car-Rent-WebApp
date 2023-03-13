import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>Contacts:</p>
          <p>0000000000</p>
          <p>example@email.com</p>
        </div>
        <div>
          <p>Socials:</p>
          <p>Instagram:</p>
          <p>Facebook:</p>
        </div>
        <div>
          <Link to="/terms-and-conditions">Terms And Conditions</Link>
        </div>
      </div>
      <div>
        <p style={{ display: "flex", justifyContent: "center" }}>
          Copyright © 2023 rentX. All rights reserved
        </p>
      </div>
    </footer>
  );
};
