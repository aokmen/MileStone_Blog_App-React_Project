import { Provider } from "react-redux";
import store from "./app/store";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <h1>
            <Dashboard />
          </h1>
        </div>
      </Provider>
    </>
  );
}

export default App;
