import { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../../app/store";
import { Button, Dropdown } from "antd";
import { LoginOutlined } from "@ant-design/icons";

export const Enter = memo(() => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const items = [
    {
      key: "profile",
      label: <span onClick={() => navigate("/profile")}>View Profile</span>,
    },
    {
      key: "logout",
      label: <span onClick={() => navigate("/logout")}>Logout</span>,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {user ? (
        <Dropdown menu={{ items, selectable: true }} placement="bottomRight">
          <img
            src={user.picture}
            alt="user"
            className="size-8 md:size-10 rounded-full cursor-pointer border border-gray-300 dark:border-gray-600"
          />
        </Dropdown>
      ) : (
        <Button
          type="primary"
          icon={<LoginOutlined />}
          onClick={() => navigate("/login")}
          className="flex items-center"
        >
          {/* Matn faqat md va undan katta ekranlarda ko‘rinadi */}
          <span className="hidden md:inline">Kirish</span>
        </Button>
      )}
    </div>
  );
});
