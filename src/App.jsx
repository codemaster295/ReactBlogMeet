import "./app.scss"
import BlogBox from "./blogbox/BlogBox"
import Sidebar from "./sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "./Pages/react/ReactBlog";
import Angular from "./Pages/angular/Angular";
import Shopify from "./Pages/shopify/Shopify";
import BootStrap from "./Pages/bootstrap/BootStrap";
import python from "./Pages/python/python";
import Magento from "./Pages/magento/Magento";
import WordPress from "./Pages/wordpress/WordPress";
import VueJs from "./Pages/vuejs/VueJs";
import Redux from "./Pages/redux/Redux";
import NodeJs from "./Pages/nodejs/NodeJs";
import Github from "./Pages/github/Github";
import Sass from "./Pages/sass/Sass";
import ReactBlog from "./Pages/react/ReactBlog";

const App = () => {
  const showNav = () =>{
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle("animationClass")
    
    
    
    const addclass = () =>{
        sidebar.classList.add("animationClass")
    }
    setInterval(addclass , 100)
    
    
} 
  return (
    <Router>
      <div className="App">
        <div className="sidemenu" onMouseOver={showNav}></div>
        <Sidebar />

        <Switch>

          <Route path="/" exact component={ReactBlog} />
          <Route path="/ReactBlog" component={ReactBlog} />
          <Route path="/Angular" component={Angular} />
          <Route path="/Shopify" component={Shopify} />
          <Route path="/BootStrap" component={BootStrap} />
          <Route path="/Python" component={python} />
          <Route path="/Magento" component={Magento} />
          <Route path="/WordPress" component={WordPress} />
          <Route path="/VueJs" component={VueJs} />
          <Route path="/Redux" component={Redux} />
          <Route path="/NodeJs" component={NodeJs} />
          <Route path="/Github" component={Github} />
          <Route path="/Sass" component={Sass} />
        </Switch>
      </div>
    </Router>

  );

};

export default App;