import React, { useState } from "react";
import { Button, Modal, Form, Input, Select, InputNumber } from "antd";
import Customtable from "../components/CustomTable";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activity, setActivity] = useState([
    {
      description: "Thanks for sharing post",
      socialPlatform: "instagram",
      socialType: "Like",
      points: 100,
    },
  ]);
  const [formCreateActivity] = Form.useForm();
  const { Option } = Select;
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const CreateActivityForm = () => {
    return (
      <Form
        form={formCreateActivity}
        layout="vertical"
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: false,
              message: "Please input the description of the activity !",
            },
          ]}
        >
          <Input size="large" type="text" />
        </Form.Item>
        <Form.Item
          label="Social Platform"
          name="socialPlatform"
          rules={[
            {
              required: false,
              message: "Please select  a Social Platform!",
            },
          ]}
        >
          <Select placeholder="Select">
            <Option value="instagram">Instagram</Option>
            <Option value="facebook">Facebook</Option>
            <Option value="twitter">Twitter</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Social Type"
          name="socialType"
          rules={[
            {
              required: false,
              message: "Please select  a Social Platform!",
            },
          ]}
        >
          <Select placeholder="Select">
            <Option value="Post">Post</Option>
            <Option value="Like">Like</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Points Earned"
          name="points"
          rules={[
            {
              required: false,
              message: "Please select  a Social Platform!",
            },
          ]}
          initialValue={100}
        >
          <InputNumber addonBefore="-" addonAfter="+" className=" w-36" />
        </Form.Item>
      </Form>
    );
  };

  const submit = () => {
    formCreateActivity.submit();
  };
  const onFinish = async (values) => {
    setLoading(true);
    values.id = activity.length + 10;
    setTimeout(() => {
      setActivity([...activity, values]);

      setLoading(false);
      setIsModalOpen(false);
    }, 1000);
  };

  return (
    <>
      <div className="w-full h-screen bg-white ">
        <div className=" mx-3  md:w-7/12 md:border-[1px] md:rounded md:shadow-lg md:p-10 md:mx-auto  md:mt-[160px] ">
          <div className="md:flex md:justify-between md:w-full md:h-full">
            <div className="md:flex md:justify-between md:items-center">
              <h1 className=" text-4xl font-bold mr-5 mb-3 mt-[90px] md:mb-0 md:mt-0 ">
                Your Activity
              </h1>
              <div className="flex items-center mb-3 md:mb-0">
                <p className=" mb-0 mr-2 text-lg">Toal Earned:</p>
                <p className=" font-bold text-transparent text-md bg-clip-text bg-gradient-to-r from-purple-200 to-purple-500 mb-0">
                  0
                </p>
              </div>
            </div>

            <Button type="primary" onClick={showModal}>
              Create Activity
            </Button>
          </div>
          <Customtable activity={activity} setActivity={setActivity} />
        </div>
      </div>
      <Modal
        title="Create Activity"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div>
            <Button
              key="back"
              onClick={handleCancel}
              className="buttonFooterModal"
            >
              Cancel
            </Button>

            <Button
              key="submit"
              onClick={submit}
              className="buttonFooterModal"
              loading={loading}
            >
              Confirm
            </Button>
          </div>,
        ]}
      >
        <CreateActivityForm formCreateActivity={formCreateActivity} />
      </Modal>
    </>
  );
};

export default Home;
