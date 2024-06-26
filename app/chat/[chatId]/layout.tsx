import { Sidebar } from "@/components/sidebar";
import { Toaster } from "@/components/ui/sonner";

interface ChatLayoutProps {
  children: React.ReactNode;
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <main className="h-full flex text-white overflow-clip">
      <Sidebar />
      <div className="h-full w-full">{children}</div>
      <Toaster className="text-white bg-neutral-800" />
    </main>
  );
}
