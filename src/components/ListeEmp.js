import React, {Component} from 'react';
import Employe from './Employe';

class ListeEmp extends Component {
    state = {
        employes: [
            {
                id: 1,
                nom: "John Doe",
                poste:"développeur",
                anciennete: "4 ans"
            },
            {
                id: 2,
                nom: "Jean Neymar",
                poste:"développeur",
                anciennete: "2 ans"
            },
            {
                id: 3,
                nom: "Bob Dix-annes",
                poste:"développeur",
                anciennete: "10 ans"
            },
        ],
    };//fin de state

    delete =(id)=>{
        const newEmployes = this.state.employes.filter(
            (employe)=>employe.id !== id
            );
            this.setState({
                employes: newEmployes,
            });
    };//fin delete

    render() {
        return (
            <div>
                    {this.state.employes.map((employe)=>(
                        <Employe 
                            key={employe.id}
                            nom={employe.nom}
                            poste={employe.poste}
                            anciennete={employe.anciennete}
                            deleteClick={()=>this.delete(employe.id)}
                        />
                    ))}
            </div>
        )//fin de return
    };//fin de render
}




export default ListeEmp;