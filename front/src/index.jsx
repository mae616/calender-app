import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CalendarBoard from './components/CalendarBoard/container';
import Navigation from './components/Navigation/container';

import dayjs from 'dayjs';
import 'dayjs/locale/ja';

// dayjsのローカライズ
// (初期化時に必ず呼ばれるようになる)
dayjs.locale('ja');

import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer);

const App = () => (
    <Provider store={store}>
        <Navigation />
        <CalendarBoard />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
