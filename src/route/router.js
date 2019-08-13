import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from '../views/Login';
import List from '../views/List';

// function Home() {
//     return <h2>Home</h2>;
// }

function router(){
    return(
        <Router>
            <Route exact path="/" component={Login} />
            <Route path="/list" component={List} />
            {/* <Route path="/:user" component={User} /> */}
        </Router> 
    );
}



export default router;