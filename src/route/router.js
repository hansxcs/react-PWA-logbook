import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from '../views/Header';

// function Home() {
//     return <h2>Home</h2>;
// }

function router(){
    return(
        <Router>
            {/* <Header /> */}
            <Route path="/" component={Header} />
            {/* <Route path="/home" component={home} /> */}
            {/* <Route path="/:user" component={User} /> */}
        </Router> 
    );
}



export default router;