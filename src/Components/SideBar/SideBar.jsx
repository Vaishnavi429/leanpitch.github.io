import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import useOuterSide from "../../Hooks/useOuterSide";

import "./SideBar.css";

export default function SideBar({ sidebar_list }) {
  const { visible, setVisible, ref } = useOuterSide(false);
  const [sideBarData, setSidebarData] = useState(sidebar_list);
  const ActiveButtonStyle = { backgroundColor: "red" };
  const SideBarDetailSetting = (click_id) => {
    const tmp_data = sideBarData.map((value, index) => {
      if (value.id === click_id && value.visible === true) {
        value.visible = false;
        setVisible(false);
      } else if (value.id === click_id && value.visible === false) {
        value.visible = true;
        value.style = ActiveButtonStyle;
        setVisible(true);
      } else {
        value.visible = false;
        value.style = {};
      }
      return value;
    });
    setSidebarData(tmp_data);
  };
  useEffect(() => {
    if (visible == false) {
      let tmp_data = sideBarData.map((value) => {
        value.visible = false;
        value.style = {};

        return value;
      });
      setSidebarData(tmp_data);
    }
  }, [visible]);
  return (
    <Fragment>
      <div className="sidebar_container">
        <div className="sideBar_list_container">
          {sideBarData.map((value) => (
            <div key={value.id}>
              <div
                className="sidebar_text"
                style={value.style && value.style}
                onClick={() => {
                  SideBarDetailSetting(value.id);
                }}
              >
                {value.text}
              </div>
            </div>
          ))}
        </div>
        {sideBarData.map(
          (value) =>
            value.visible &&
            visible && (
              <div ref={ref} key={value.id} className="sidebar_list_detail">
                <value.component />
              </div>
            )
        )}
      </div>
    </Fragment>
  );
}
