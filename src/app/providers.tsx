"use client";
/* Next Themes */
import { ThemeProvider } from "next-themes";
/* React Redux */
import { Provider } from "react-redux";
import { store } from "@/store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" enableSystem defaultTheme="system">
        {children}
      </ThemeProvider>
    </Provider>
  );
}
