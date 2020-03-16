import createContext from "mini-create-react-context";

const createNamedContext = name => {
  const context = createContext();
  context.displayName = name;

  return context;
};

const BrowserContext = createNamedContext("BrowserRouter");
const HashContext = createNamedContext("HashRouter");

export { BrowserContext, HashContext };
