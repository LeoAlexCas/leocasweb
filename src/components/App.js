import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home'
import NotFound from '../pages/NotFound';


class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={ Home }></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default App;