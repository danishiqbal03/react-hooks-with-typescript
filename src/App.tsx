import React, { useState } from 'react';

interface IUserInfo {
  name: string;
}

const App = () => {
  const initialUserInfo: IUserInfo = { name: '' };
  const [userInfo, setUserInfo] = useState<IUserInfo>(initialUserInfo);

  // handle change event of the input element
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ name: event.target.value });
  }

  // handle button click event
  const handleClick = () => {
    setUserInfo({ name: 'Danish' });
  }

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      {/* Display the user name */}
      {userInfo && userInfo.name}<br/>
      {/* Render button only when userInfo is defined */}
      {userInfo && <button onClick={handleClick}>Click</button>}
      {/* Render input only when userInfo is defined */}
      {userInfo && <input type="text" onChange={handleNameChange} />}
    </div>
  );
}

export default App;
