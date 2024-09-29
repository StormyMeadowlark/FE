import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance"; // Axios instance for API calls
import { Link } from "react-router-dom";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch users when the component loads
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/users`);
        setUsers(response.data); // Assuming the API returns an array of users
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle user deletion
  const deleteUser = async (userId) => {
    try {
      await axiosInstance.delete(`/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (err) {
      setError("Error deleting user");
    }
  };

  // Handle user activation
  const activateUser = async (userId) => {
    try {
      await axiosInstance.put(`/users/${userId}/activate`);
      const updatedUsers = users.map((user) =>
        user._id === userId ? { ...user, status: "Active" } : user
      );
      setUsers(updatedUsers);
    } catch (err) {
      setError("Error activating user");
    }
  };

  // Handle user deactivation
  const deactivateUser = async (userId) => {
    try {
      await axiosInstance.put(`/users/${userId}/deactivate`);
      const updatedUsers = users.map((user) =>
        user._id === userId ? { ...user, status: "Inactive" } : user
      );
      setUsers(updatedUsers);
    } catch (err) {
      setError("Error deactivating user");
    }
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>

      {error && <div className="text-red-500">{error}</div>}
      {loading && <div className="text-green-500">Loading users...</div>}

      <div className="flex justify-between mb-6">
        <h2 className="text-2xl">All Users</h2>
        <Link
          to="/superadmin/user-management/add"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add New User
        </Link>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="text-left py-2 px-4">Username</th>
            <th className="text-left py-2 px-4">Email</th>
            <th className="text-left py-2 px-4">Role</th>
            <th className="text-left py-2 px-4">Status</th>
            <th className="text-left py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id} className="border-t">
                <td className="py-2 px-4">{user.username}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">{user.status}</td>
                <td className="py-2 px-4">
                  {user.status === "Inactive" ? (
                    <button
                      onClick={() => activateUser(user._id)}
                      className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                      Activate
                    </button>
                  ) : (
                    <button
                      onClick={() => deactivateUser(user._id)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded"
                    >
                      Deactivate
                    </button>
                  )}
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-500 text-white px-4 py-2 ml-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
