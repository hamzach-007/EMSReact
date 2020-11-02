import React, { Component } from 'react'
import Dashboard from './Dashboard';
import TopBar from './TopBar';
import Reports from '../Reports/Reports'
import Projects from '../Projects/Projects'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

class Home extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
          
        return(
            
            <React.Fragment>
               
                <Dashboard>
                     {/* <Projects /> */}
                     {/* <Switch>
                        <Route exact path="/Projects" component={Projects}></Route>
                        <Route exact path="/Reports" component={Reports}></Route>
                     </Switch> */}
                     {/* <Reports/> */}
                     { this.props.children }
                 </Dashboard>
               {/* <aside id="left-panel" class="left-panel">
                 <Dashboard>
                     <Reports/>
                 </Dashboard>

               </aside>
               <div id="right-panel" class="right-panel">
               <TopBar />
               </div> */}
               
               
            </React.Fragment>
            
            
            



        );


    }


}

export default Home;