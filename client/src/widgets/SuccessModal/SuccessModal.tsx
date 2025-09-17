import React from "react";
import { Button, Modal } from "antd";

interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      centered
      className="success-modal"
    >
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2 style={{ color: "#52c41a" }}>Успех!</h2>
        <p>Ваше сообщение успешно отправлено. Мы скоро свяжемся с вами.</p>
        <Button type="primary" onClick={onClose} style={{ marginTop: "20px" }}>
          Закрыть
        </Button>
      </div>
    </Modal>
  );
};

export default SuccessModal;
