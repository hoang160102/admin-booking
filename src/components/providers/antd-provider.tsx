"use client"

import React from "react"
import { ConfigProvider } from "antd"

export function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f5851e",
          borderRadius: 8,
          fontFamily: "var(--font-montserrat)",
        },
        components: {
          Button: {
            controlHeightLG: 44,
            borderRadiusLG: 12,
          },
          Input: {
            controlHeightLG: 44,
            borderRadiusLG: 8,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
