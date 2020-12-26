import './App.css';
import './UserInput/userInput';
import UserInput from './UserInput/userInput';
import './UserOutpout/userOutput';
import UserOutput from './UserOutpout/userOutput';
import {useState} from 'react';

function App() {
  const [usersState,setUsersState] = useState(
    {
      users:
    [
      {
        name : "Atef"
      },
      {
        name : "Max"
      }
    ]
  }
  );
  const updateNameHandler = (name)=>
  {
    setUsersState(
      {
        users:
      [
        {
          name : name
        },
        {
          name : "Max"
        }
      ]
    }
    )
  }
  const _updateNameHandler = (event)=>
  {
    setUsersState(
      {
        users:
      [
        {
          name : event.target.value
        },
        {
          name : "Max"
        }
      ]
    }
    )
  }
  return (
    <div className="App">
      <h1>Practice - Section-3</h1>
      <UserInput changed={_updateNameHandler}></UserInput>
      <button onClick={updateNameHandler.bind(this,"Atef!")}>Update names</button>
      <UserOutput name={usersState.users[0].name}></UserOutput>
      <UserOutput name={usersState.users[1].name}></UserOutput>
    </div>
  );
}

export default App;
