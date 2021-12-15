import React from "react";
import ReactDOM from "react-dom";

import CalendarBoard from './components/CalendarBoard';

import dayjs from 'dayjs';
import 'dayjs/locale/ja';

// dayjsのローカライズ
// (初期化時に必ず呼ばれるようになる)
dayjs.locale('ja');

const App = () => (
    <div>
        <CalendarBoard />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
