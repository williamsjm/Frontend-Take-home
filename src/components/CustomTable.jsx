import React, { useState } from "react";
import { Button, Popover } from "antd";
import {
  FaEdit,
  FaTrashAlt,
  FaInstagram,
  FaFacebookF,
  FaQuestionCircle,
} from "react-icons/fa";

const Customtable = (props) => {
  const { activity, setActivity } = props;

  const handleDelete = (item) => {
    setActivity(activity.filter((a) => a.id !== item.id));
  };

  return (
    <table className="table w-full  text-left border-separate text-sm table-auto">
      <thead>
        <tr>
          <th className=" hidden md:inline-block">Date</th>
          <th className=" text-left">Activity</th>
          <th className=" text-left"></th>
          <th className=" text-center">Earned</th>
          <th className=" text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {activity.map((item, index) => {
          return (
            <tr className="shadow" key={index}>
              <td className=" hidden md:table-cell md:py-3 md:px-2 md:border-t md:border-b md:border-l">
                2020-12-20
              </td>
              <td className="py-3 px-2 border-t border-b">
                {item.description}
              </td>
              <td className="py-3 px-2 border-t border-b ">
                <div className="flex justify-center items-center">
                  {item.socialPlatform === "instagram" ? (
                    <FaInstagram
                      className="mr-1"
                      style={{ width: 15, height: 15 }}
                    />
                  ) : (
                    <FaFacebookF
                      className="mr-1"
                      style={{ width: 15, height: 15 }}
                    />
                  )}

                  <p className="mb-0 text-[14px]">{item.socialType}</p>
                </div>
              </td>
              <td className="py-3 px-2 border-t border-b text-center">
                <p className=" font-bold text-transparent text-lg bg-clip-text bg-gradient-to-r from-white to-purple-400 mb-0">
                  +{item.points}
                </p>
              </td>
              <td className="py-3 px-2  border-t border-b border-r   justify-center">
                <div className="flex justify-center">
                  <FaEdit
                    className=" mr-2 "
                    style={{ width: 15, height: 15, color: "grey" }}
                    onClick={() => {
                      console.log("rerer");
                    }}
                  />

                  <Popover
                    placement="bottom"
                    content={
                      <>
                        <div className="flex items-center">
                          <FaQuestionCircle
                            className="mr-1"
                            style={{ width: 14, height: 14, color: "orange" }}
                          />
                          <span>Are you sure to delete this ?</span>
                        </div>
                        <div className=" flex justify-end mt-2 ">
                          <Button
                            className="buttonFooterPopOver"
                            style={{ color: "1890ff" }}
                          >
                            No
                          </Button>
                          <Button
                            type="primary"
                            onClick={() => {
                              console.log(index, "index");

                              handleDelete(item);
                            }}
                          >
                            Yes
                          </Button>
                        </div>
                      </>
                    }
                    trigger="click"
                  >
                    <FaTrashAlt
                      style={{ width: 15, height: 15, color: "grey" }}
                      // onClick={(index) => {
                      //   setOpen({ [index]: true });
                      // }}
                    />
                  </Popover>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Customtable;
