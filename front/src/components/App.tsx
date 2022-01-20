import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './NavBar';

const BASE_URL = 'https://ty8omrsmwa.execute-api.eu-west-1.amazonaws.com/dev';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="header">Dictionary</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
