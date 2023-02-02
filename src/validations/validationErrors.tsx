import React from "react";

interface ValidationErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const ValidationError: React.FC<ValidationErrors> = ({
  name,
  email,
  password,
  confirmPassword,
}) => {
  return (
    <>
      {name && <span className="error">{name}</span>}
      {email && <span className="error">{email}</span>}
      {password && <span className="error">{password}</span>}
      {confirmPassword && <span className="error">{confirmPassword}</span>}
    </>
  );
};
