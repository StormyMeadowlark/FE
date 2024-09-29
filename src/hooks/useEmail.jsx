import { useState } from "react";
import { sendEmail } from "../Backend";

const useEmail = () => {
  const [emailStatus, setEmailStatus] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const sendEmailData = async (emailData) => {
    try {
      const result = await sendEmail(emailData);
      setEmailStatus(result.message);
    } catch (error) {
      setEmailError(error.message);
    }
  };

  return { sendEmailData, emailStatus, emailError };
};

export default useEmail;