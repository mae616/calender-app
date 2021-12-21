import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import CalendarBoard from './components/CalendarBoard/container';
import Navigation from './components/Navigation/container';
import AddScheduleDialog from './components/AddScheduleDialog/container';
import CurrentScheduleDialog from './components/CurrentScheduleDaialog/container';

import DayjsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import dayjs from 'dayjs';
import jaLocale from 'dayjs/locale/ja';

// dayjsのローカライズ
// (初期化時に必ず呼ばれるようになる)
dayjs.locale('ja');

import rootReducer from './redux/rootReducer';

// redux-thunkが普通の action なのか thunk の action なのかを判断してくれるようになる
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={DayjsUtils} locale={jaLocale}>
            <Navigation />
            <CalendarBoard />
            <AddScheduleDialog />
            <CurrentScheduleDialog />
        </MuiPickersUtilsProvider>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
