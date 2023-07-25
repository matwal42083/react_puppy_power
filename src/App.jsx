import { useState } from 'react';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
/*button functions for Email*/
  const showEmail = (id) => {
    setPuppies(prevPuppies => {
      return prevPuppies.map(puppy => {
        if (puppy.id === id) {
          return { ...puppy, showEmail: !puppy.showEmail };
        }
        return puppy;
      });
    });
  };
  /*Button functions for Age */
  const showAge = (id) => {
    setPuppies(prevPuppies => {
      return prevPuppies.map(puppy => {
        if (puppy.id === id) {
          return {...puppy, showAge: !puppy.showAge};
        }
        return puppy;
      })
    })
  }
  return (
    <div>
      <header>
        <h1>
          Puppy Pals <img src="https://i.ibb.co/qjHJkHp/image.png" alt="image" border="0"/>
        </h1>
      </header>
      <div id='container' style={{height:'300px'}}>
      {puppies.map((puppy) => {
        return (
          <div key={puppy.id} id='card'>
            <h3>{puppy.name}</h3>
             {puppy.showAge && <p>{puppy.age}</p>}
             {puppy.showEmail && <p>{puppy.email}</p>}
            <button onClick={() => showAge(puppy.id)}>
              {puppy.showAge ? 'Age' : 'Age'}
            </button>
            <button onClick={() => showEmail(puppy.id)}>
              {puppy.showEmail ? 'Email' : 'Email'}
            </button>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default App;



