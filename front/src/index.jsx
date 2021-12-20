import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

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

const store = createStore(rootReducer);

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
