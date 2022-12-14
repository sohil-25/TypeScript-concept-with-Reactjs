import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User2 } from "./components/context/User2";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { CounterClass } from "./components/class/CounterClass";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restrition/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/CustomButton";
import { CustomInput } from "./components/html/Input";
import { CustomComponent } from "./components/html/CustomComponent";
import { Text } from "./components/polymorphic/Text";

function App() {
  const personName = {
    first: "Tony",
    last: "Stark",
  };

  const nameList = [
    {
      first: "Peter",
      last: "griffin1",
    },
    {
      first: "Stewie",
      last: "griffin2",
    },
    {
      first: "Meg",
      last: "griffin3",
    },
  ];

  return (
    <div className="App">
      <Greet name="peter" message={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Advance props example</Heading>
      <Oscar>
        <Heading>Advance props example</Heading>
      </Oscar>
      <Greet name="Advance props example" isLoggedIn={true} />
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <br />
      <br />
      <Input
        value="hardcoded value"
        handleChange={(event) => console.log(event)}
      />
      <br />
      <br />
      <Container
        style={{ border: "1px solid black", padding: "1rem", color: "red" }}
      />
      <br/>
      <LoggedIn />
      <br/>
      <User/>
      <br/>
      <Counter/>
      <br/> <br/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <br/> <br/>
      <UserContextProvider>
        <User2/>
      </UserContextProvider>
      <br/> <br/>
      <DomRef/>
      <br/> <br/>
      <MutableRef />
      <br/> <br/>
      <CounterClass message='ts props in class component' />
      <br/> <br/>
      <Private isLoggedIn={true} component={Profile}/>
      <br/> <br/>
      <List 
         items={['Banana', 'Superman','Wonder Woman']}
         onClick={(item)=>console.log(item)
         }
      />
       <List 
        items={[1,2,3]}
         onClick={(item)=>console.log(item)
         }
      />
      <List 
        items={nameList}
         onClick={(item)=>console.log(item)
         }
      />
      <br/><br/>
      <RandomNumber value={23} isPositive/>
      <br/><br/>
      <Toast position="center" />
      <br/><br/>
      <CustomButton variant="primary" onClick={() => console.log('Clicked')
      } >
        Primary Button
      </CustomButton>
      <CustomInput style={{backgroundColor:'red'}} />
      <br/><br/>
      <CustomComponent name='extracting component props type' isLoggedIn={true}/>
      <br/><br/>
      <Text as={'h1'} color="primary" >Header with polymorphic component</Text>
      <Text as={'p'} size='md'>paragraph</Text>
      <Text as={'label'} htmlFor='someId' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
