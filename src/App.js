import logo from './logo.svg';
import './App.css';
import Composition from './components/2-4Props/Composition';
import Extraction from './components/2-4Props/Extraction/Extraction';
import ClassComponent from './components/2-5State/ClassComponent';
import FunctionalComponent from './components/2-5State/FunctionalComponent';
import ClassComponent2 from './components/2-6LifeCycle/ClassComponent';
import Event from './components/2-7Event/Event';
import Condition from './components/2-8ConditionalRendering/Condition';
import State from './components/3-3Hooks/State';
import Reducer from './components/3-3Hooks/Reducer';
import WelcomeDialog from './components/3-5Composiotion/WelcomeDialog';
import Dialog from './components/3-6Composition2/Dialog';
import ThankYou from './components/3-6Composition2/ThankYou';
import Input from './components/3-7HOC/Input';
import Button from './components/3-7HOC/Button';
import withLoading from './components/3-7HOC/withLoading';
import Memo from './components/3-8.Memoization/Memo';
import CleanUp from './components/CleanUp';
import Example from './components/3-10Context/Example';

function App() {
  return (
    <>
    <Example />
    {/* <CleanUp /> */}
    {/* <Memo />     */}
    {/* <Input />
    <br />
    <br />
    <Button /> */}
    {/* <ThankYou /> */}
    {/* <Dialog /> */}
    {/* <WelcomeDialog /> */}
    {/* <State />
    <Reducer /> */}
    {/* <Condition /> */}
    {/* <Event /> */}
    {/* <ClassComponent2 /> */}
    {/* <ClassComponent />
    <FunctionalComponent />
    <Extraction />
    <Composition /> */}
    </>
  );
}

export default App;
