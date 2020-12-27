import './App.css';
import {Component} from 'react';
import ValidatorComponent from './ValidationComponent/validator';
import CharComponent from './CharComponent/charComponent';

 class App extends Component {
   state = 
   {
    inputLength : 0,
    inputText : null
   };
 
   deleteLetter(index)
   {
     console.log("Delete letter : ",index)
     let letterList = [...this.state.inputText];
     letterList.splice(index,1);
     this.setState({inputText : letterList.join('')});
   }
  
  render()
  {
   const updateTextLength = (event)=>
    {
      console.log("New event ...");
      this.setState({inputLength : event.target.value.length, inputText : event.target.value});
    }

   let  charCompList = null;
   if(this.state.inputText)
   {
     let letters = [...this.state.inputText];
    charCompList = (
      letters.map((char,index)=>
      {
       return (<CharComponent letter = {char} click={()=>this.deleteLetter(index)}></CharComponent>)
      }
    ))
   }

    return (
      <div className="App">
        <h1>Practice - Section-4</h1>
        <input type="text" onChange={updateTextLength} value={this.state.inputText}/>
        <p>{this.state.inputLength}</p>
        <ValidatorComponent length={this.state.inputLength}></ValidatorComponent>
        {charCompList}
      </div>
    );
  }
}

export default App;
