import About from './About'
import Home from './Home'
import Service from './Service'
import File from './File'
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
export default function Acceuil() {
    return (        
        <>
            <Header />
            
          <Switch>                
             <Route path='/about' component={About}/>  
             <Route exact path='/' component={Home}/>               
             <Route path='/service' component={Service}/> 
             <Route path='/file' component={File}/>            
          </Switch>
    </>
);
}