import { Outlet } from "react-router";

function RootLayout() {
    return (
        <div className="root-layout-container">
            <Outlet />
        </div>
    );
}

export default RootLayout;