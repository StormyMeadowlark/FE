
import { isAuthenticated, logout } from "../Backend";
import { useNavigate } from "react-router-dom";



const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigation
  const authenticatedUser = isAuthenticated(); // Check if the user is authenticated

  // Function to handle signout action
  const onSignout = () => {
    logout(); // Perform signout action
    console.log("Signed out");
    navigate("/"); // Redirect to login page after sign out
  };

  return !authenticatedUser ? (
    <h1>Please sign in</h1>
  ) : (
    <div className="dashboard pt-80">
      <button onClick={onSignout}>Sign Out</button>
    <h1>Hello, {}</h1> {/* Display user's name */}
    </div>
  );
};

export default Dashboard;
