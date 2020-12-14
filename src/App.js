import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import JobDescription from './pages/JobDescription'
import Home from './pages/Home'

function App() {
  // const HeaderStyle= {
  //   fontFamily: 'Roboto', sans-serif;
  // }

  return (
    <div className=' p-3'>
      <header className='headerStyle'>
        <strong>Github</strong> Jobs
      </header>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/JobDescribtion' component={JobDescription} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
