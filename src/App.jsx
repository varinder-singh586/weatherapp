// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';



function App() {
  return (
    
    <Router>
      <Routes>
      
         <Route path="/Checkweather" >
          <Route path="/Checkweather" element={<Dashboard />} />
         

          
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
