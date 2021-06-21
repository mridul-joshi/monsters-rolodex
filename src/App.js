//import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';


import {CardList} from './components/card-list/card-list.component'


import {SearchBox} from './components/serach-box/search-box.component'
class App extends Component{
  constructor()
  {
    super();

    this.state={
      monsters:[],
      searchField: ''
    };

    
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }


  handleChange = (e)=>                        //used as a bind function to set proper this state
  {
    this.setState({ searchField: e.target.value});
  }
  render() {

    const{monsters,searchField}= this.state;
    const filteredMnsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));


    
    
    return(
      <div className="App">
          <h1 >Monsters Rolodex</h1>
            
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMnsters} />
          
        
      
    </div>
  );

  }
}

export default App;
