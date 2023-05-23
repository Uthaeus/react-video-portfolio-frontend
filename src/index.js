import ReactDOM from 'react-dom/client';

import './styles/main.scss';
import App from './App';

import UserContextProvider from './store/user-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextProvider>
        <App />
    </UserContextProvider>        
);
