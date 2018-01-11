import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/home/component'


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const App = () =>
  <div>
    <Route exact path="/" component={Home} />
  </div>


export default App;
