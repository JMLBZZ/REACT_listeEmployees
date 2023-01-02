import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_EMPLOYE':
            return {
                employes: state.employes.filter(employe =>
                    employe.id !== action.payload
                )
            };
        case 'ADD_EMPLOYE':
            return {
                employes: [action.payload, ...state.employes]
            };

        default:
            return state;
    };//fin de switch
};

export class Provider extends Component {
    state = {
        employes: [
            {
                id: 1,
                nom: "John Doe",
                poste: "développeur",
                anciennete: "4 ans"
            },
            {
                id: 2,
                nom: "Jean Neymar",
                poste: "développeur",
                anciennete: "2 ans"
            },
            {
                id: 3,
                nom: "Bob Dix-annes",
                poste: "développeur",
                anciennete: "10 ans"
            },
        ],
        dispatch: action =>
            this.setState((state) => reducer(state, action))
    };//fin de state

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }


}

export const Consumer = Context.Consumer;