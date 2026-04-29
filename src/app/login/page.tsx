"use client"

import { useState } from "react"
import { Lock, Mail, ArrowRight } from "lucide-react"
import { Form, Button, Checkbox, message } from "antd"
import { Input, Password } from "@/components/ui/antd/input"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [form] = Form.useForm()

  const onFinish = async (values: any) => {
    setIsLoading(true)
    console.log("Success:", values)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      message.success("Đăng nhập thành công!")
    }, 2000)
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-muted/40 p-6 md:p-10">
      <div className="w-full max-w-md">
        <Card className="border-none shadow-2xl shadow-primary/10">
          <CardHeader className="space-y-1 text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="bg-primary p-3 rounded-2xl shadow-lg shadow-primary/20">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-foreground"
                >
                  <path
                    d="M12 2L1 7.5L12 13L21 8.5V15H23V7.5L12 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M4 11.5V15.5C4 17.433 7.58172 19 12 19C16.4183 19 20 17.433 20 15.5V11.5C20 11.5 16.5 14.5 12 14.5C7.5 14.5 4 11.5 4 11.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight">NCC Admin</CardTitle>
            <CardDescription className="text-base">
              Vui lòng đăng nhập để quản lý hệ thống
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
              className="mt-4"
              size="large"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Vui lòng nhập email!" },
                  { type: "email", message: "Email không hợp lệ!" }
                ]}
              >
                <Input 
                  label="Email"
                  prefix={<Mail className="size-4 text-muted-foreground mr-1" />} 
                  placeholder="admin@ncc.com" 
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
              >
                <Password
                  label="Mật khẩu"
                  prefix={<Lock className="size-4 text-muted-foreground mr-1" />}
                  placeholder="••••••••"
                />
              </Form.Item>

              <div className="flex items-center justify-between mb-6">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox className="text-muted-foreground font-medium">Ghi nhớ tôi</Checkbox>
                </Form.Item>
              </div>

              <Form.Item className="mb-0">
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  className="w-full h-12 text-base font-bold rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 border-none transition-all hover:scale-[1.02] active:scale-[0.98]"
                  loading={isLoading}
                >
                  {!isLoading && "Đăng nhập"}
                  {!isLoading && <ArrowRight className="h-5 w-5" />}
                </Button>
              </Form.Item>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col border-t bg-muted/50 pt-4 pb-4">
            <p className="text-xs text-center text-muted-foreground">
              &copy; 2026 NCC Admin Panel. All rights reserved.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
