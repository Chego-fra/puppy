import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import StudentList from './Components/StudentList';
import CreateStudent from './Components/CreateStudent';
import StudentDetails from './Components/StudentDetails';
import EditStudent from './Components/EditStudent';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path="/">
            <StudentList />
          </Route>
          <Route path="/create-student">
            <CreateStudent />
          </Route>
          <Route path="/student-details/:id">
            <StudentDetails />
          </Route>
          <Route path="/edit-student/:id">
            <EditStudent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
