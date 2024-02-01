import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
// if(localStorage.token) {
//    //console.log("Token ", localStorage.token);
//     const user = jwtDecode(localStorage.token) as IUser;
//     console.log("user:", user);
//     store.dispatch({
//         type: AuthReducerActionType.LOGIN_USER,
//         payload: {
//             email: user.email,
//             image: user.image
//         } as IUser
//     });
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
)