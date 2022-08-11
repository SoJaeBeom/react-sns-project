import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
<<<<<<< HEAD
import store from "./redux/config/configStore";
=======
import store from './redux/config/configStore';
>>>>>>> 3cc3809bdb45f46100420b0cf369a99def50c54f

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
<<<<<<< HEAD
);
=======
);
>>>>>>> 3cc3809bdb45f46100420b0cf369a99def50c54f
