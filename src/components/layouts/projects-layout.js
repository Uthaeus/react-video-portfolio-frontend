import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";

function ProjectsLayout() {
    return (
        <div className="projects-layout-container">
            <MainNavigation />
            <Outlet />
        </div>
    );
}

export default ProjectsLayout;