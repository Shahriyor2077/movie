import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { memo } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="bg-slate-200 dark:bg-black dark:text-white">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default memo(MainLayout);
