import React from "react";

import { ImageList } from '@material-ui/core';
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
        .map((_, i) => {
            const diffFromFirstDay = i - firstDayIndex;
            const day = firstDay.add(diffFromFirstDay, 'day');

            return day;
        });
};

// ダミーデータ
const calendar = createCalendar();


const CalendarBoard = () => {

    console.log(calendar);

    return (
        <div className={styles.container}>
            <ImageList className={styles.grid} cols={7} gap={0} rowHeight="auto">
                {calendar.map(day => (
                    <li key={day.toISOString()}>
                        <div className={styles.element}>
                            {day.format('D')}
                        </div>
                    </li>
                ))}
            </ImageList>
        </div >
    );
};

export default CalendarBoard;