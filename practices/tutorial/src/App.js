import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Form from './components/Form'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'
import PortalDemo from './components/PortalDemo'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import Comp1 from './components/Comp1'
import { UserProvider } from './components/userContext'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

function App() {
  return (
    <div className="App">
      
      {/*<Greet name="Nahid"/>
    
      <Greet name="Hasan"/>
      <Welcome subject="Class component!"/>
       <Message/>
      <Counter />
      <Welcome subject="Class component!"/>
      <FunctionClick/>
  <ClassClick/>
    <EventBind/>
    <ParentComponent/>
    <UserGreeting/>
    <NameList/>
    <ParentComp/>
    <PortalDemo/>
    <ClickCounter/>
    <HoverCounter/>
    <UserProvider value="Nahid">
      <Comp1/>
    </UserProvider>
    <PostList/>*/}
    <PostForm/>
    
      
     
    </div>
  );
}

export default App;
