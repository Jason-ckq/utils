import Main from "./components/Main";
import MainRoutes from "./routes/index";
const Container = props => (
  <Main>
    <MainRoutes {...props} />
  </Main>
);

export default Container;
