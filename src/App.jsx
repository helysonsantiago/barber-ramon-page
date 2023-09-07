import GlobalStyles from "./globalStyles";
import Home from "./pages/home/Home";
import "./app.css";
import Slider from "./pages/section/Slider";
const App = () => {
  return (
    <div id="app">
      <Home />
      <Slider />
      <GlobalStyles></GlobalStyles>
    </div>
  );
};

export default App;
