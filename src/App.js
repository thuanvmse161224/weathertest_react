import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <main>
      <BrowserRouter>
        <Main />    
      </BrowserRouter>
    </main>
  );
}

export default App;
