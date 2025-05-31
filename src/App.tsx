import { useEffect } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import zhCN from "antd/locale/zh_CN";
import { useThemeStore } from "./hooks/useThemeStore";
import Router from "./router";

function App() {
  const { isDark, loadFromDisk } = useThemeStore();

  useEffect(() => {
    loadFromDisk();
  }, [loadFromDisk]);

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: "#7c3aed",
          borderRadius: 6,
        },
        algorithm: isDark
          ? antdTheme.darkAlgorithm
          : antdTheme.defaultAlgorithm,
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
