import ReactDOM from 'react-dom/client';
import  {Provider} from 'react-redux';
import {store} from './store/index';
import './index.css';
import App from './App';
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<Provider store={store}>
    <App/>
</Provider>)