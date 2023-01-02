import React, { Component } from "react";
import {Consumer} from "../context";
import { v4 as uuidv4 } from 'uuid';


export default class AddEmploye extends Component{
    state = {
        nom:"",
        poste:"",
        anciennete:"",
    };//fin de state

    onChange =(e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (dispatch, e)=>{
        e.preventDefault();
        
        const newEmploye = {
            id: uuidv4(),//génère automatiquement un id
            nom: this.state.nom,
            poste:this.state.poste,
            anciennete:this.state.anciennete,
        };//fin de const

        dispatch({
            type: "ADD_EMPLOYE",
            payload: newEmploye
        });//fin dispatch
    };//fin onSubmit

    render (){
        return(
            
            <Consumer>
                {(value) => {
                    return(
                        <div className="card mb-3">
                            <div className="card-header">Ajouter un employé</div>
                            <div className="card-body">
                                <form onSubmit = {this.onSubmit.bind(this,value.dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="nom">Nom</label>
                                        <input type="text" 
                                            className = "form-control form-control-lg"
                                            placeholder="Entrez votre nom"
                                            name="nom"
                                            value = {this.state.nom}
                                            onChange = {this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="poste">Poste</label>
                                        <input type="text" 
                                            className = "form-control form-control-lg"
                                            placeholder="Entrez votre poste actuel"
                                            name="poste"
                                            value = {this.state.poste}
                                            onChange = {this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="anciennete">Ancienneté</label>
                                        <input type="text" 
                                            className = "form-control form-control-lg"
                                            placeholder="Entrez votre année d'ancienneté"
                                            name="anciennete"
                                            value = {this.state.anciennete}
                                            onChange = {this.onChange}
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        value="Ajouter un employé"
                                        className="btn btn-primary"
                                    />
                                </form>
                            </div>
                        </div>
                    )}
                }
            </Consumer>


        )
    }
}//fin export