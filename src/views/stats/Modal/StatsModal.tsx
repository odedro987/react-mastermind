import React from "react";
import "./StatsModal.scss";
import Modal from "react-modal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function StatsModal({ isOpen, onClose }: Props) {
  return <Modal isOpen={isOpen} onRequestClose={onClose}></Modal>;
}

export default StatsModal;
