import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css';
import './styles/styles.scss';
import BasicExample from './components/NestedRoutes';
import Parent from './components/Parent/Parent';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Counter from './components/Counter/Counter';
import FileUpload from './components/FileUpload';
import Todo from './components/Todo';
import WrappedComponent from './components/Hocexample';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <Counter />
    </Provider>
)

ReactDOM.render(<WrappedComponent/>, document.getElementById('app'));