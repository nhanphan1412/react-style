import { Tabs } from "@mantine/core";
import { Outlet, useNavigate } from "react-router-dom";
import { IconSettings, IconMessageCircle, IconCoin } from "@tabler/icons";

export const Layout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Tabs defaultValue="chat">
        <Tabs.List>
          <Tabs.Tab
            onClick={() => navigate("/")}
            icon={<IconMessageCircle size={14} />}
            value="chat"
          >
            Chat
          </Tabs.Tab>
          <Tabs.Tab
            onClick={() => navigate("/styled-component")}
            icon={<IconSettings size={14} />}
            value="styled component"
          >
            Styled Component
          </Tabs.Tab>
          <Tabs.Tab
            onClick={() => navigate("/")}
            icon={<IconCoin size={14} />}
            value="money"
            aria-label="Get money"
          />
        </Tabs.List>
      </Tabs>
      <Outlet />
    </div>
  );
};
