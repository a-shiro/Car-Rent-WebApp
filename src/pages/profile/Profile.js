import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div>
      <h1>Profile page</h1>
      <div>
        <img
          height="100px"
          width="150px"
          src="https://static7.depositphotos.com/1144472/739/i/950/depositphotos_7397871-stock-photo-customer-support-phone-operator-at.jpg"
        />
        <p>Name: Josh</p>
        <p>Email: Josh@mail.com</p>
        <p>Number: 000000000</p>
        <button>Add payment method</button>
        <Link to="/administration">To Administation</Link>
      </div>

      <div>
        <h1>Currently Rented:</h1>
        <h2>No rents at this time</h2>
      </div>
    </div>
  );
};
