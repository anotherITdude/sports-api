export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[100vh] flex-col justify-center items-center">
      {children}
    </div>
  );
}
