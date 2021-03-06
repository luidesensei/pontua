import React, { Component } from 'react';
//import { Link } from 'react-router-dom'
//COMPONENTES
import ListaServidores from './ListaServidores';

export default  class Servidores extends Component{
   constructor(props) {
    super(props);
    this.state = { isChecked: true, lista : [], nome:"local", url:"http://localhost:8080", baseUrl:"/pontua" };
    
  }
  componentDidMount(){
     this.listarServidores ();
  }
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });

  }

    adicionar(event){
        event.preventDefault();
        if(!this.nome.value.length !== 0  && !this.url.value.length !== 0){
            let dados_srv  = [{nome:this.nome.value,  url : this.url.value, padrao: this.state.isChecked, baseUrl:this.baseUrl.value}];
            localStorage.setItem("servidores", JSON.stringify(dados_srv));
            this.listarServidores(); 
        }else{
            console.log("VERIFIQUE OS CAMPOS")
        }      
    } 

    listarServidores(){ 
      var rows =  JSON.parse(localStorage.getItem("servidores")); 
      this.setState({lista:rows}); 
    }

    render(){
        return(
            <div>
                <form className="form-group" onSubmit={this.adicionar.bind(this)}>
                <fieldset>
                    <legend>Adicionar servidores</legend>
                    <label htmlFor="nome">Nome</label>
                        <input 
                            id="nome" 
                            type="text" 
                            placeholder="Nome" 
                            ref={(input) => this.nome = input}
                    />
                  
                    <label htmlFor="url">URL</label>
                        <input 
                            id="url" 
                            type="text" 
                            placeholder="http://seudominio.com" 
                            ref={(input) => this.url = input}
                    />
                    
                    <label htmlFor="url">Base URL</label>
                        <input 
                            id="base" 
                            type="text" 
                            placeholder="/pontua" 
                            ref={(input) => this.baseUrl = input}
                    />
                    
                    <button 
                        type="submit" 
                        className="btn btn-info btn-fill">
                        Alterar
                    </button>
                </fieldset>
                </form>
                <ListaServidores lista={this.state.lista}/>
            </div>
            
        );
    }
}