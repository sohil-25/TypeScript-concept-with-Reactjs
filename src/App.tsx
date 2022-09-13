import { Stats } from 'fs';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
      <Status status='loading' />
      <Heading>Advance props example</Heading>
      <Oscar>
        <Heading>Advance props example</Heading>
      </Oscar>
      <Greet name="Advance props example" isLoggedIn={true}  />
      <Button 
      handleClick={(event, id) => {
        console.log('Button clicked', event, id);
      }} />
      <br/>
      <br/>
      <Input value='hardcoded value' handleChange={(event) => console.log(event)} />
      <br/>
      <br/>
      <Container style={{ border: '1px solid black', padding: '1rem', color:'red' }} />
    </div>
  );
}

export default App;
