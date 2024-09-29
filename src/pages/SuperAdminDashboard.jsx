import { Link } from "react-router-dom";

const SuperAdminDashboard = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl mb-8">SuperAdmin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Vehicle Management Link */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-200">
          <h2 className="text-xl mb-4">Vehicle Management</h2>
          <p>
            Manage your vehicle listings, including adding, editing, and
            deleting vehicles.
          </p>
          <Link
            to="/superadmin/vehicle-management"
            className="mt-4 inline-block px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-700 transition duration-200"
          >
            Go to Vehicle Management
          </Link>
        </div>

        {/* Media Management Link */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-200">
          <h2 className="text-xl mb-4">Media Management</h2>
          <p>
            Manage your media, such as photos and documents related to vehicles.
          </p>
          <Link
            to="/superadmin/media-management"
            className="mt-4 inline-block px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-700 transition duration-200"
          >
            Go to Media Management
          </Link>
        </div>

        {/* User Management Link */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-200">
          <h2 className="text-xl mb-4">User Management</h2>
          <p>Manage users, their roles, and permissions for your tenant.</p>
          <Link
            to="/superadmin/user-management"
            className="mt-4 inline-block px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-700 transition duration-200"
          >
            Go to User Management
          </Link>
        </div>

        {/* Settings Link */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-200">
          <h2 className="text-xl mb-4">Settings</h2>
          <p>
            Configure settings such as system preferences and tenant
            information.
          </p>
          <Link
            to="/superadmin/settings"
            className="mt-4 inline-block px-4 py-2 bg-green-500 text-black rounded-md hover:bg-green-700 transition duration-200"
          >
            Go to Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
