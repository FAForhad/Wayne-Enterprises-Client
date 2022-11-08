import { Toaster } from 'react-hot-toast';
import './App.css';
import Routes from './Router/Routes/Routes';

function App() {
  return (
    <div className="App bg-black opacity-95 z-50">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Routes></Routes>
    </div>
  );
}

export default App;
