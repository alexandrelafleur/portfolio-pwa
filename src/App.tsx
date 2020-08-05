import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';

import Projects from './views/Projects/Projects';
import Home from './views/Home/Home';
import Header from './views/Header/Header';

const App = () => {
    return (
        <Router>
            <div className={styles.app}>
                <div className={styles.header}>
                    <Header />
                </div>
                <div className={styles.switch}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/projects" component={Projects} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
