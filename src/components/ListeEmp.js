import React, {Component} from 'react';
import Employe from './Employe';
import {Consumer} from "../context";

class ListeEmp extends Component {

    render() {
        return (
            <Consumer>
                {value=>{
                    return (            
                        <div>
                            {value.employes.map((employe)=>(
                                <Employe 
                                    key={employe.id}
                                    id={employe.id}
                                    nom={employe.nom}
                                    poste={employe.poste}
                                    anciennete={employe.anciennete}
                                />
                            ))}
                        </div>
                    )
                }}
            </Consumer>
        )//fin de return
    };//fin de render
}




export default ListeEmp;