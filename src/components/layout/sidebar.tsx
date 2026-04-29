"use client";

import React, { useState } from "react";
import "./sidebar.css";
import { Layout, Menu, Typography, Avatar, Tooltip } from "antd";
import {
  BankOutlined,
  TagsOutlined,
  BookOutlined,
  ShoppingOutlined,
  TeamOutlined,
  UserAddOutlined,
  FolderOutlined,
  LayoutOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  CustomerServiceOutlined,
  DatabaseOutlined,
  UserOutlined,
  SettingOutlined,
  DollarOutlined,
  PictureOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Sider } = Layout;
const { Text } = Typography;

type MenuItem = Required<MenuProps>["items"][number];

const menuItems: MenuItem[] = [
  {
    key: "corporate",
    icon: <BankOutlined />,
    label: "法人管理",
  },
  {
    key: "brand",
    icon: <TagsOutlined />,
    label: "ブランド管理",
  },
  {
    key: "classroom",
    icon: <BookOutlined />,
    label: "教室管理",
  },
  {
    key: "job",
    icon: <ShoppingOutlined />,
    label: "求人情報管理",
  },
  {
    key: "member",
    icon: <TeamOutlined />,
    label: "会員管理",
  },
  {
    key: "applicant",
    icon: <UserAddOutlined />,
    label: "応募者管理",
  },
  {
    key: "category-page",
    icon: <FolderOutlined />,
    label: "カテゴリページ管理",
  },
  {
    key: "page",
    icon: <LayoutOutlined />,
    label: "ページ管理",
  },
  {
    key: "notification",
    icon: <BellOutlined />,
    label: "お知らせ",
  },
  {
    key: "user-qa",
    icon: <QuestionCircleOutlined />,
    label: "ユーザーQA",
  },
  {
    key: "client-qa",
    icon: <CustomerServiceOutlined />,
    label: "クライアントQA",
  },
  {
    key: "master-data",
    icon: <DatabaseOutlined />,
    label: "マスターデータ管理",
  },
  {
    key: "school-account",
    icon: <UserOutlined />,
    label: "塾アカウント管理",
  },
  {
    key: "admin-account",
    icon: <SettingOutlined />,
    label: "運営アカウント管理",
  },
  {
    key: "billing",
    icon: <DollarOutlined />,
    label: "請求管理",
  },
  {
    key: "media",
    icon: <PictureOutlined />,
    label: "メディアライブラリ",
  },
];

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("media");

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      trigger={null}
      width={240}
      collapsedWidth={72}
      className="admin-sidebar"
      theme="light"
    >
      {/* Header: Logo + Collapse Toggle */}
      <div className="sidebar-header">
        {!collapsed && (
          <div className="sidebar-logo">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logo-icon"
            >
              <path
                d="M12 2L1 7.5L12 13L21 8.5V15H23V7.5L12 2Z"
                fill="#F5851E"
              />
              <path
                d="M4 11.5V15.5C4 17.433 7.58172 19 12 19C16.4183 19 20 17.433 20 15.5V11.5C20 11.5 16.5 14.5 12 14.5C7.5 14.5 4 11.5 4 11.5Z"
                fill="#F5851E"
              />
            </svg>
            <span className="logo-text">塾講師コネクト</span>
          </div>
        )}
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
        </button>
      </div>

      {/* Navigation Menu */}
      <div className="sidebar-menu-wrapper">
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)}
          items={menuItems}
          className="sidebar-menu"
        />
      </div>

      {/* User Info Footer */}
      <div className="sidebar-footer">
        <div className="user-info">
          <div
            className="user-avatar-flag"
            style={{
              width: collapsed ? 32 : 36,
              height: collapsed ? 32 : 36,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "2px solid #f0f0f0",
              position: "relative",
              background: "#DA251D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg viewBox="0 0 30 20" width="100%" height="100%">
              <rect width="30" height="20" fill="#DA251D" />
              <polygon
                points="15,4 16.76,9.41 22.5,9.41 17.87,12.59 19.63,18 15,14.82 10.37,18 12.13,12.59 7.5,9.41 13.24,9.41"
                fill="#FFFF00"
              />
            </svg>
          </div>
          {!collapsed && (
            <div className="user-details">
              <Text className="user-name">スーパー管理者</Text>
              <Text className="user-email">superadmin@ex...</Text>
            </div>
          )}
        </div>
        {!collapsed && (
          <Tooltip title="ログアウト">
            <button className="logout-btn" aria-label="Logout">
              <LogoutOutlined />
            </button>
          </Tooltip>
        )}
      </div>
    </Sider>
  );
}
