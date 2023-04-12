import logo from './logo.svg';
import './App.css';
import User from './components/User';
import { useState } from "react"

const allUsers = [
  { id: 1, name: "than zaw oo", email: "thanzaw@gmail.com", age: 26 },
  { id: 2, name: "zaw zaw", email: "zawzaw@gmail.com", age: 27 },
  { id: 3, name: "soe ye ", email: "soeye@gmail.com", age: 28 },
  { id: 4, name: "chit min", email: "chitmin@gmail.com", age: 29 }
]

//Userstate hook

function App ()
{
  //const [users, setUsers] = useState( allUsers );
  const [buss, setBuss] = useState( {
    name: "line 30",
    startStation: "Hle Dan",
    endStation: "Tamwa",
    stations: ["Hle Dan", "Myaynigone", "Mayangone", "Tamwa"]
  } )

  // {const number = 27;}
  //console.log( "Render App component." )

  return (
    <div className="App">
      <header className="App-header">
        {/* {<img src={logo} className="App-logo" alt="logo" />} */}
        {/*<h1>{number}</h1>
        <User id="1" name="Than Zaw" age={26} email="thanzaw@gmail.com" gender="male" />*/}
        {/* {<h1>{name}</h1>
        <button onClick={() => setName( <h1>Welcom To Mandalay</h1> )}>Click Me</button>} */}

        {/* <input type='text' onChange={event =>
        {
          // console.log( event.target.value )
          const inputText = event.target.value;
          const filteredUser = allUsers.filter( user => user.name.includes( inputText ) );
          console.log( filteredUser );
          setUsers( filteredUser )
        }

        } />
        <ul>
          {users.map( ( user ) =>
          {
            return <li>{user.name}</li>;
          } )}
        </ul>
 */}
        <button onClick={() =>
        {
          setBuss( { ...buss, name: "Line 40", startStation: "Myaynigone", endStation: "Mayangone" } )
        }}>
          Change buss name
        </button>

        <ul>
          <li><h3>Buss Name:{buss.name}</h3></li>
          <li><h3>Start Station:{buss.startStation}</h3></li>
          <li><h3>End Station:{buss.endStation}</h3></li>

          <h1>All Stations</h1>

          {buss.stations.map( ( station ) =>
          {
            return <li key={station}><h4>{station}</h4></li>
          } )}

        </ul>

      </header>
    </div>
  );
}

export default App;
