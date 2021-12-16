// 表示にのみ責務をもつコンポーネント
import React from 'react';

import CalendarElement from '../CalendarElement';

import {
    ImageList,
    Typography
} from '@material-ui/core';
import * as styles from './style.css';

const week = ['日', '月', '火', '水', '木', '金', '土'];

const CalendarBoard = ({ calendar, month }) => {

    console.log(calendar);

    return (
        <div className={styles.container}>
            <ImageList className={styles.grid} cols={7} gap={0} rowHeight="auto">
                {week.map(dayOfWeek => (
                    <li key={dayOfWeek}>
                        <Typography
                            className={styles.days}
                            color="textSecondary"
                            align="center"
                            variant="caption"
                            component="div"
                        >
                            {dayOfWeek}
                        </Typography>
                    </li>
                ))}
                {calendar.map(day => (
                    <li key={day.toISOString()}>
                        <CalendarElement day={day} month={month}></CalendarElement>
                    </li>
                ))}
            </ImageList>
        </div >
    );
};

export default CalendarBoard;