import React from 'react';

const Car = ({color, nom , year}) =>{

    //console.log(year);
    const colorInfo = color? (`Couleur : ${color}`): ('Couleur : Néant');
    if(nom){
        return (
            // <div style={{backgroundColor:'pink',width:'400px' , padding:'10px', margin:'5px auto'}}>
                <tr>
               <td> marque : {nom} </td>
               <td>  age : {year} </td>
               <td>  {colorInfo}</td> 
                </tr>

            // </div>
        )
    }else{
        return   null
        
    //     ( <div style={{backgroundColor:'pink',width:'400px' , padding:'10px', margin:'5px auto'}}>
    //     <p>Pas de data !</p>
       
    // </div>)
        
    }
    
}

export default Car;