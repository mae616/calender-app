import React from "react";

import { GridList } from '@material-ui/core';
import * as styles from './style.css';

import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');


const createCalendar = () => {

    const firstDay = dayjs().startOf('month');

    // 最初の日の曜日のindexを取得
    const firstDayIndex = firstDay.day();

    return Array(35)
        .fill(0)
        .map((_, i) => i - firstDayIndex);
};

// ダミーデータ
const calendar = createCalendar();


const CalendarBoard = () => {

    console.log(calendar);

    return (
        <div className={styles.container}>
            <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
                {calendar.map(day => (
                    <li>
                        <div className={styles.element}>
                            {day}
                        </div>
                    </li>
                ))}
            </GridList>
        </div >
    );
};

export default CalendarBoard;