import React from "react";
import Button from "../components/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Button label="Call Us" />
      <Button label="Google Map" />
      <Button label="Order By WhatsApp" />
      <Button label="Order Online" />
    </header>
  );
};

export default Header;
