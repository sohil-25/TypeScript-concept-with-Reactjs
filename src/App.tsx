import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {

const personName = {
  first: 'Tony',
  last: 'Stark',
}

const nameList = [
  {
    first: 'Peter',
    last: 'griffin1'
  },
  {
    first: 'Stewie',
    last: 'griffin2'
  },
  {
    first: 'Meg',
    last: 'griffin3'
  },

]

  return (
    <div className='App'>
      <Greet name="peter" message={10} isLoggedIn={false}  />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
