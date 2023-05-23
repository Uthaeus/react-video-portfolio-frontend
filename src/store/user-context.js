import { useState, createContext } from "react";

export const UserContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {}
});

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    function loginHandler(userData) {
        setUser(userData);
    }

    function logoutHandler() {
        setUser(null);
    }

    const context = {
        user: user,
        login: loginHandler,
        logout: logoutHandler
    };

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;