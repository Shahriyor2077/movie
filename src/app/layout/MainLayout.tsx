import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { memo } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col dark:bg-black dark:text-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default memo(MainLayout);
