import { Button, Modal, Input, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const {Option} =Select;

function Onchange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log("search:", val);
}

const { TextArea } = Input;
const Watchlist = () => {
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

  const [IsmodalVisible, SetisModalVisible] = useState(false);

  const Showmodal = () => {
    SetisModalVisible(true);
  };

  const Handleok = () => {
    SetisModalVisible(false);
  };

  const Handlecancel = () => {
    SetisModalVisible(false);
  };
  return (
    <>
      <>
        <div>
          <div className="new_watchlist">
            <Button
              style={{
                borderRadius: "10px",
                background: "rgba(150, 150, 150, 0.2)",
                color: "black",
                fontWeight: "bold",
              }}
              onClick={showModal}
            >
              <PlusOutlined />
              New Watchlist
            </Button>
            <Modal
              title="New Watchlist"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Watchlist name</p>
              <Input
                style={{
                  borderRadius: "8px",
                }}
                placeholder="Watchlist Name"
                type="text"
                showCount
                maxLength={32}
                onChange={onChange}
              />
              <p>symbols</p>
              <p>Description (optional)</p>
              <TextArea
                style={{
                  background: "rgb(255, 255, 255)",
                  border: "1px solid rgb(207, 214, 228)",
                  borderRadius: "8px",
                  width: "100%",
                  maxWidth: "100%",
                  fontSize: "14px",
                  lineHeight: "21px",
                  padding: "8px, 16px",
                }}
                placeholder="Watchlist description."
                type="text"
                showCount
                maxLength={160}
                onChange={onChange}
              ></TextArea>
              <p> symbols</p>
            </Modal>
            <div>
              <Button
                style={{
                  borderRadius: "10px",
                  background: "rgba(150, 150, 150, 0.2)",
                  color: "black",
                  fontWeight: "bold",
                }}
                onClick={show_Modal}
              >
                Edit Watchlist
              </Button>
              <Modal
                title="Edit Watchlist"
                visible={isModal_Visible}
                onOk={handle_Ok}
                onCancel={handle_Cancel}
              >
                <p>Watchlist name</p>
                <Input
                  style={{
                    borderRadius: "8px",
                  }}
                  placeholder="Watchlist Name"
                  type="text"
                  showCount
                  maxLength={32}
                  onChange={onChange}
                />
                <p> symbols</p>
                <p>Description (optional)</p>
                <TextArea
                  style={{
                    background: "rgb(255, 255, 255)",
                    border: "1px solid rgb(207, 214, 228)",
                    borderRadius: "8px",
                    width: "100%",
                    maxWidth: "100%",
                    fontSize: "14px",
                    lineHeight: "21px",
                    padding: "8px, 16px",
                  }}
                  placeholder="Watchlist description."
                  type="text"
                  showCount
                  maxLength={160}
                  onChange={onChange}
                ></TextArea>
                <p> symbols</p>
              </Modal>
            </div>
            <Button
              style={{
                borderRadius: "8px",
                background: "rgb(56, 97, 251)",
                color: "rgb(255, 255, 255)",
              }}
              onClick={Showmodal}
            >
              Add Coins
            </Button>
            <Modal
              title="Select Coin"
              visible={IsmodalVisible}
              onOk={Handleok}
              onCancel={Handlecancel}
            >
              <Select
                showSearch
                placeholder="Select a coin"
                optionFilterProp="children"
                onChange={Onchange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {/* Code To Watch To Connect The Search Coin To We Can Delete After Done With The Connection */}
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Modal>
          </div>
          <div className="portempty">
            <div className="etitle">Your watchlist is empty</div>
            <div className="esubtitle">
              Start building your watchlist by clicking button above
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Watchlist;
