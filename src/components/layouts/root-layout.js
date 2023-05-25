import { Outlet } from "react-router";

import ProjectNavigation from "../navigation/project-navigation";

function RootLayout() {
    return (
        <div className="root-layout-container">
            <ProjectNavigation />
            <Outlet />
        </div>
    );
}

export default RootLayout;