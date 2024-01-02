import { useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const hangleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.phone.length < 10) {
      window.alert(
        `Invalid phone number. Please enter a 10-digit phone number.`
      );
      return;
    }
    let today = new Date();
    let userDate = new Date(userData.dob);
    if (today < userDate) {
      window.alert(
        `Invalid date of birth. Date of birth cannot be in the future.`
      );
      return;
    }

    // console.log("submitted", userData);
    setIsModalOpen(!isModalOpen);
  };

  const handleClose = (e) => {
    if (e.target.id === "wrapper-id" && isModalOpen) {
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <div onClick={(e) => handleClose(e)} id="main-page" className="modal">
      <h1>User Details Modal</h1>
      <button onClick={handleModalOpen}>Open Form</button>

      {isModalOpen && (
        <div
          onClick={(e) => handleClose(e)}
          id="wrapper-id"
          className="wrapper"
        >
          <div id="modal-content-id" className="modal-content">
            <h1>Fill Details</h1>
            <form
              onClick={(e) => handleClose(e)}
              id="form-id"
              className="form"
              onSubmit={(e) => handleSubmit(e)}
            >
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                required
                name="username"
                value={userData.username}
                onChange={(e) => hangleChange(e)}
              />
              <label htmlFor="email">Email Adress:</label>
              <input
                id="email"
                type="email"
                required
                name="email"
                value={userData.email}
                onChange={(e) => hangleChange(e)}
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                id="phone"
                type="tel"
                required
                name="phone"
                value={userData.phone}
                onChange={(e) => hangleChange(e)}
              />
              <label htmlFor="dob">Date of Birth:</label>
              <input
                id="dob"
                type="date"
                required
                name="dob"
                value={userData.dob}
                onChange={(e) => hangleChange(e)}
              />
              <button className="submit-button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
