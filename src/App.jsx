// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';



function App() {
  return (
    
    <Router>
      <Routes>
      
         <Route path="/" >
          <Route path="/" element={<Dashboard />} />
         

          
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
