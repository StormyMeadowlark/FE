import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import Logo from "../../limeGreenAndBlackLogo.svg?react"; // Assuming this is your logo component

const VerifyEmail = () => {
  const [searchParams] = useSearchParams(); // Use to get query params
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const token = searchParams.get("token");
  const tenantId = searchParams.get("tenantId");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axiosInstance.get(
          `/users/${tenantId}/verify-email/${token}`
        );
        setSuccess(true);
        setLoading(false);
        setTimeout(() => navigate("/login"), 3000); // Redirect to login after 3 seconds
      } catch (err) {
        setError(
          err.response?.data?.error || "Verification failed. Try again."
        );
        setLoading(false);
      }
    };

    if (token && tenantId) {
      verifyEmail();
    } else {
      setError("Invalid verification link.");
      setLoading(false);
    }
  }, [token, tenantId, navigate]);

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="text-center">
        <Logo className="mx-auto w-auto h-[12rem]" />
        {loading ? (
          <div className="text-green-500">Verifying email...</div>
        ) : success ? (
          <div className="text-green-500">
            Email verified successfully! Redirecting to login...
          </div>
        ) : (
          <div className="text-red-500">{error}</div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
