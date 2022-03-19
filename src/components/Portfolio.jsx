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
  return (
    <>
      <>
        <div className="adnew">
          <Button
            style={{
              borderRadius: "10px",
              background: "rgba(150, 150, 150, 0.2)",
              color: "black",
            }}
          >
            ... More
          </Button>
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
              maxLength="32"
              type="text"
            />
            <p>0 /32 characters</p>
            <div>
              <Button
                style={{
                  background: "rgb(56, 97, 251)",
                  color: "rgb(255, 255, 255)",
                  cursor: "pointer",
                  fontWeight: "600",
                  borderRadius: "8px",
                  width: "auto",
                  height: "40px",
                  padding: "0px 24px",
                  lineHeight: "24px",
                  alignItems: "center",
                  border: "0px",
                  display: "inline-flex",
                  justifyContent: "center",
                }}
                className="Port"
              >
                Create portfolio
              </Button>
            </div>
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
