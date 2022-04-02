import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./containers/About";
import Cocktail from "./containers/Cocktail";
import Error from "./containers/Error";
import Home from "./containers/Home";
import { AppProvider } from "./Context";

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/drink/:id' element={<Cocktail />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
