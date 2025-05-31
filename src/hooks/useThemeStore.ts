import { create } from "zustand";
import { persist } from "zustand/middleware";
import { writeTextFile, readTextFile } from "@tauri-apps/plugin-fs";
import { join, appDataDir } from "@tauri-apps/api/path";

const dir = await appDataDir();
const filePath = await join(dir, "theme-config.json");

interface ThemeState {
  isDark: boolean;
  setDark: (v: boolean) => void;
  loadFromDisk: () => Promise<void>;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,
      setDark: (v) => set({ isDark: v }),
      loadFromDisk: async () => {
        try {
          const raw = await readTextFile(filePath);
          const parsed = JSON.parse(raw);
          set(parsed);
        } catch (e) {
          console.warn("首次启动或读取失败，使用默认主题");
        }
      },
    }),
    {
      name: "theme-config", // 用于缓存内存状态（内存持久）
    }
  )
);

// 额外写入磁盘
useThemeStore.subscribe(async (state) => {
  const json = JSON.stringify({
    isDark: state.isDark,
  });
  await writeTextFile(filePath, json);
});
