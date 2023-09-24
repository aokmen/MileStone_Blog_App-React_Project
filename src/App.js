import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store, { persistor }from "./app/store";
import {ToastContainer} from "react-toastify"
import  "./App.css"
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter/>
        </PersistGate>
       </Provider>
       <ToastContainer/>   
    </>
  );
}

export default App;
