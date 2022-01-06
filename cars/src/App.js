import React  from 'react'
// ,  {Component}
import './App.css';
import Mycars from './components/Mycars'

class App extends React.Component {

  state = {
    titre:'Mon Catalogue voiture'
  }

  changeTitle = (e)=>{
    this.setState({
      titre: 'Mon nouveau titre'
    })
  }
  changeViaparam = (titre)=>{
    this.setState({
      titre: titre
    })
  }
  changeViaBind = (param)=>{
    this.setState({
      titre: param
    })
  }
  changeViaInput = (e)=>{
    this.setState({
      titre: e.target.value
    })
  }
 
  render(){
    return (
      <div className="App">
       <Mycars /> 

       {/* <button onClick={this.changeTitle}>changer le nom en dure </button>
       <button onClick={()=>this.changeViaparam('Titre via un param')}>Via param </button>
       <button onClick={this.changeViaBind.bind(this,'Titre via Bind')}>Via Bind </button>

       <input type="text" onChange={this.changeViaInput} value= {this.state.titre}/> */}
 
      </div>
    );
  }
 
  
}

export default App;
