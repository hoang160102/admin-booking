import AdminSidebar from "@/components/layout/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminSidebar />
      <main className="flex-1 ml-[240px] transition-all duration-200">
        {children}
      </main>
    </>
  );
}
