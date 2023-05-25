import { Outlet } from "react-router";

import ProjectNavigation from "../navigation/project-navigation";

function ProjectsLayout() {
    return (
        <div className="projects-layout-container">
            <ProjectNavigation />
            <Outlet />
        </div>
    );
}

export default ProjectsLayout;