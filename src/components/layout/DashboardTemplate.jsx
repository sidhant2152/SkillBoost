import { Outlet } from "react-router-dom";
import Sidebar from "../core/dashboard/Sidebar";
function DashboardTemplate() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Side bar */}
      <div className="w-[250px]">
        <Sidebar />
      </div>
      {/* Required page */}
      <div className="w-[calc(100vw-255px)]">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardTemplate;
