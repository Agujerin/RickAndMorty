import './App.css'
import RickAndMortyApp from './components/RickAndMortyApp';
import { HashRouter, Route, Switch} from "react-router-dom"
import RickAndMortyNavMenu from './components/RickAndMortyNavMenu';
import RickAndMortyHeader from './components/RickAndMortyHeader';
import RickAndMortyFavs from './components/RickAndMortyFavs';
import RickAndMortyAbout from './components/RickAndMortyAbout';

function App() {
  return (
    <>
      <RickAndMortyHeader />
      <HashRouter>
        <RickAndMortyNavMenu/>
        <Switch>
        <Route exact path="/" component={RickAndMortyApp}/>
        <Route exact path="/favorites" component={RickAndMortyFavs}/>
        <Route exact path="/about" component={RickAndMortyAbout}/>
        <Route path="*">
          <h3 className="error-404">
          <i className="fas fa-exclamation-triangle"></i>
          <br></br>
          ERROR 404: La ruta seleccionada no existe</h3>
        </Route>
        </Switch>
      </HashRouter>
    </>
  )
}

export default App;
