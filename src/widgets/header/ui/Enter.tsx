import { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../../app/store";
import { Button, Dropdown } from "antd";

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
            className="size-10 rounded-full cursor-pointer"
          />
        </Dropdown>
      ) : (
        <Button>
          {/* className="bg-white text-black px-5 py-1 cursor-pointer rounded
          font-medium hover:bg-red-500 hover:text-white transition shadow" */}
          Kirish
        </Button>
      )}
    </div>
  );
});
