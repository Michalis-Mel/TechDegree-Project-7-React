//Import the libraries we will use 
import React, { Component }  from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import axios from 'axios';

//Import your own API key from the config.js file
import apiKey from './config';

//Import App Components
import SearchForm from './components/Header/SearchForm';
import Nav from './components/Header/Nav';
import PhotoContainer from './components/MainContent/PhotoContainer';
import Error404 from './components/MainContent/Error404';

class App extends Component{

//Creating the App class State
  constructor() {
    super();
    this.state = {
      sun:[],
      moon:[],
      ocean:[],
      search:[],
      loading: true
    };
  } 

//Mount components for the search function and the defaults
componentDidMount(){
  this.performSearch();
  this.performSearch('sun');
  this.performSearch('moon');
  this.performSearch('ocean');
}

 // Get data from API request when user try to search images
 performSearch = (query = 'ocean') =>{
  try {
    this.setState({ loading: true })

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (query === 'sun') {
          this.setState({
            sun: response.data.photos.photo,
            loading: false
          });
          
        } else if(query === 'moon') {
          this.setState({
            moon: response.data.photos.photo,
            loading: false
          });
          
        } else if(query === 'ocean') {
          this.setState({
            ocean: response.data.photos.photo,
            loading: false
          });

        }else{
          this.setState({
            search: response.data.photos.photo,
            loading: false
          });
          }
        }
      ) 
   //handle error
  } catch (error) { 
    console.log('Error fetching and parsing data', error);
  } 
}

  render(){
    return (
      <Router>
        <div className="main-container">
          <SearchForm onSearch={this.performSearch}/>
          <Nav />
          <Switch>
            <Route exact path="/" render = { () => <Redirect to='/ocean'/> } />
            <Route path="/ocean" render = { () => (this.state.loading) ? <p>Loading...</p> : <PhotoContainer data = {this.state.ocean}/>  }  />
            <Route path="/sun" render = { () => (this.state.loading) ? <p>Loading...</p> : <PhotoContainer data = {this.state.sun}/>  }  />
            <Route path="/moon" render = { () => (this.state.loading) ? <p>Loading...</p> : <PhotoContainer data = {this.state.moon}/> } /> 
            <Route path="/search/:query" render = {() => (this.state.loading) ? <p>Loading...</p> : <PhotoContainer  data = {this.state.search}/> } />
            <Route component={ Error404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
