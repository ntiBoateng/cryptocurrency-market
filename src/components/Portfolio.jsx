import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Modal, Button, Input } from "antd";

const Portfolio = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  const [isModal_Visible, setIsModal_Visible] = useState(false);

  const show_Modal = () => {
    setIsModal_Visible(true);
  };

  const handle_Ok = () => {
    setIsModal_Visible(false);
  };

  const handle_Cancel = () => {
    setIsModal_Visible(false);
  };
  return (
    <>
      <>
        <div className="adnew">
          <Button
            style={{
              borderRadius: "10px",
              background: "rgba(150, 150, 150, 0.2)",
              color: "black",
              fontWeight: "bold",
            }}
            onClick={show_Modal}
          >
            Edit portfolio
          </Button>
          <Modal
            title="Edit portfolio"
            visible={isModal_Visible}
            onOk={handle_Ok}
            onCancel={handle_Cancel}
          >
            <p>Portfolio name</p>
            <Input
              showCount
              maxLength={32}
              onChange={onChange}
              style={{
                borderRadius: "8px",
              }}
              placeholder="Enter your portfolio name..."
              type="text"
            />
            <p>Characters</p>

          </Modal>
          <Button
            style={{
              borderRadius: "10px",
              background: "rgb(56, 97, 251)",
              color: "rgb(255, 255, 255)",
            }}
          >
            {<PlusCircleOutlined />}Add New
          </Button>
        </div>

        <div>
          <Button
            className="plus"
            style={{
              borderRadius: "10px",
              fontWeight: "bold",
            }}
            onClick={showModal}
          >
            {<PlusCircleOutlined />}Create portfolio
          </Button>
          <Modal
            title="Create portfolio"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Portfolio name</p>

            <Input
              style={{
                borderRadius: "8px",
              }}
              placeholder="Enter your portfolio name..."
              type="text"
              showCount
              maxLength={32}
              onChange={onChange}
            />
            <p>Characters</p>
          </Modal>
        </div>
        <div className="portempty">
          <div className="etitle">This portfolio is empty</div>
          <div className="esubtitle">Add any coins to get started</div>
        </div>
      </>
    </>
  );
};

export default Portfolio;
