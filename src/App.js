import './App.css';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Main from './components/Main/Main';
function App() {
  return (
    <div className="main">
      <Header />
      <Main/>
    </div>
  );
}

export default App;
