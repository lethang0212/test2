import { Provider } from "react-redux";
import { Example } from "./application";
import { store } from "./store";

export function App() {
  return (
    <Provider store={store}>
      <Example />
    </Provider>
  );
}
