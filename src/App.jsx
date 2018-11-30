import React, {Component} from 'react'
import { BrowserRouter, Route, NavLink as Link, Redirect, Switch  } from 'react-router-dom'

import Assemble from './pages/Assemble/assemble'
import Cinema from './pages/cinema/cinema'
import Mine from './pages/mine/mine'
import Movies from './pages/movies/movies'
import './App.css'
export default class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="app">

                    <Switch>
                        <Route path="/" exact render={()=>{
                            //对'/'重定向
                            return <Redirect to="/movies"/>
                        }}/>

                        <Route path="/movies" component={Movies}/>
                        <Route path="/cinema" component={Cinema}/>
                        <Route path="/assemble" component={Assemble}/>
                        <Route path="/mine" component={Mine}/>

                    </Switch>

                    


                    <nav className="tabs">
                        <Link className="tab" to="/movies">电影</Link>
                        <Link className="tab" to="/cinema">影院</Link>
                        <Link className="tab" to="/assemble">优团</Link>
                        <Link className="tab" to="/mine">我的</Link>
                    </nav>
                    

                </div>
            </BrowserRouter>
        )
    }
}