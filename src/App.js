import { Provider } from "react-redux";
import store from "./app/store";
import AppRouter from "./router/AppRouter";
import {ToastContainer} from "react-toastify"
import  "./App.css"
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <Provider store={store}>
          <AppRouter/>
       </Provider>
       <ToastContainer/>   
    </>
  );
}

export default App;
