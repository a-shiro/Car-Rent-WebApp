import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="info-wrapper">
        <div>
          <h6 className="info-title">Contacts:</h6>
          <p>+359 88 888 8888</p>
          <p>rentx@email.com</p>
        </div>
        <div>
          <h6 className="info-title">Social Networking:</h6>
          <p>Instagram - @official_rentx</p>
          <p>Facebook - RentX Cars</p>
          <p>TikTok - @official_rentx</p>
        </div>
        <div>
          <h6 className="info-title">Links:</h6>
          <p>Terms And Conditions</p>
          <p>Trustpilot Reviews</p>
          <p>FAQ</p>
        </div>
      </div>
      <div className="copyright-wrapper">
        <p>Copyright © 2023 RentX. All rights reserved</p>
      </div>
    </footer>
  );
};
