
import './App.css';
import ProductTab from './ProductTab.jsx';
import MsgBox from "./MsgBox.jsx";
import Button from "./Button.jsx";
import Form from './Form.jsx';

function App() {
 
     return(
      <>
        <MsgBox username="Piyush" textColor="red" />
        <MsgBox username ="Simple coder" textColor ="red"/>
        <ProductTab/>
        <Button/>
        <Form></Form>
       
      </>

       ); 

 
}
export default App;
