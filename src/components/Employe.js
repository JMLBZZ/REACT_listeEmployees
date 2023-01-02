import React, {Component} from "react";
import {Consumer} from "../context"

class Employe extends Component {
    state = {
        affiche: true
    };
    
    showEmploye = ()=>{
        this.setState({
                    affiche:!this.state.affiche
                });
    }

    deleteEmploye = (id, dispatch)=>{
        dispatch({type:"DELETE_EMPLOYE", payload:id})
    }


    render(){
        return(

            <Consumer>
                {value=>{
                    return (
                        <div className="card card-body mb-3 text-center">
                            <h4>{this.props.nom}&nbsp;
                                <i style={{cursor: "pointer"}} 
                                    className="fas fa-sort-down"
                                    onClick={this.showEmploye}
                                ></i>
                                <i style={{cursor: "pointer", color:"red"}}
                                    className="fas fa-times d-flex justify-content-end"
                                    onClick={()=>this.deleteEmploye(this.props.id, value.dispatch)}
                                ></i>
                            </h4>

                            {this.state.affiche ? (
                                <div className="card card-body mb-3">
                                    <h6>Poste : {this.props.poste}</h6>
                                    <h6>Ancienneté : {this.props.anciennete}</h6>
                                </div>
                            ) : null}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}


export default Employe;