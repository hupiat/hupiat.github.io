import { BookOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React from "react";
import { MAIL_CONTACT } from "../utils/constants";

export default function NavFloatButton() {
  return (
    <FloatButton.Group trigger="click" type="primary" icon={<PlusOutlined />}>
      <a href="CV.pdf" download style={{ margin: "10px" }}>
        <FloatButton icon={<BookOutlined />} type="primary" />
      </a>
      <a href={`mailto:${MAIL_CONTACT}`} style={{ margin: "10px" }}>
        <FloatButton icon={<EditOutlined />} type="primary" />
      </a>
    </FloatButton.Group>
  );
}
