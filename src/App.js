import React from "react";
import logo from "./mintbean.png";
import { Switch, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home/Home";
import ImagesPage from "./pages/ImagesPage/ImagesPage";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/images" component={ImagesPage} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
