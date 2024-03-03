import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
//import { Home } from './Home';
import { Login } from './Login';
import { Home } from './Home';
import { Account } from './Account';
import {Table} from './Table'
import { useSelector } from 'react-redux';

export const Routing = ()=>{
    const state = useSelector((d)=>d.data)
    return(
        <div>
            <BrowserRouter>
           {
            state.isAuth ? <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/tab' element={<Table/>}></Route> 
            </Routes>
             :
            <Routes> 
                <Route path='/' element={<Login/>}></Route>
                <Route path='/acc' element={<Account/>}></Route>
            </Routes>
 }
                
            </BrowserRouter>
        </div>
    )
}