import React ,  {Component } from 'react';
import { Fragment } from 'react';
import Car from './Cars'
class Mycars extends Component{

    noCopy = () =>{
        alert('merci de ne pas copier le texte ');
    }
    addStyle = (e)=>{
        console.log(e.target);
        if(e.target.classList.contains('styled')){
            e.target.classList.remove('styled');
        }else{
            e.target.classList.add('styled');
        }
    }
    addTenYears = () =>{
        const updatedSate = this.state.voitures.map((param) =>{
            return param.year -=10;
        })
        this.setState({
            updatedSate
        })
    }

    state ={
        voitures: [
            {name:'Ford', color:'red',year:2000},
            {name:'Mercedes', color:'black',year:2010},
            {name:'Peaugeot', color:'green',year:2018},
        ],
        titre: 'Mon Catalogue Voiture 2'
    }
    render(){
     console.log(this.state)
      const year = new Date().getFullYear();
        return ( 
            <>
               <h1> {this.state.titre} </h1>
               <button onClick={this.addTenYears}>+ 10 ans</button>
               {/* onMouseOver={this.addStyle} */}
               <p onCopy={this.noCopy}>Lorem ipsum, dolor sit amet consecteur adipisicing elit </p>
               {/* <Car color={this.state.voitures[0].color} year={year-this.state.voitures[0].year + ' ans'}>{this.state.voitures[0].name}</Car>
               <Car color={this.state.voitures[1].color} year={year -this.state.voitures[1].year + ' ans'} >{this.state.voitures[1].name}</Car>
               <Car color={this.state.voitures[2].color} year={year -this.state.voitures[2].year + ' ans'}>{this.state.voitures[2].name}</Car> */}
               <table className="carsTable">
                   <tr>
                       <th>Marque</th>
                       <th>age</th>
                       <th>couleur</th>
                     
                   </tr>
                {
                    this.state.voitures.map((voiture, index) =>{
                        return(
                            <Fragment key={index}>
                            <Car  color={voiture.color} year={year-voiture.year + ' ans'} nom= {voiture.name}/>
                            </Fragment>
                        )
                    })
                }
                </table>
         </>
        ) 
    }
}
export default Mycars;