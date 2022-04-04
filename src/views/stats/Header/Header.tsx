import React, { useState } from "react";
import StatsModal from "../Modal/StatsModal";
import "./Header.scss";
import { IoStatsChart } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="Header">
      <h3 className="Header-title">Rosh Gadol</h3>
      <IoStatsChart className="Header-icon" onClick={openModal} />
      <StatsModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

export default Header;
