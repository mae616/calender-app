// コンポーネントの分離
import React from 'react';

import {
    isSameMonth,
    isFirstDay,
    isSameDay
} from '../../services/calendar';

import * as styles from './style.css';
import { Typography } from '@material-ui/core';

import dayjs from 'dayjs';

const CalendarElement = ({ day }) => {

    const today = dayjs();

    // 今月以外をグレーダウン
    const isCurrentMonth = isSameMonth(day, today);
    const textColor = isCurrentMonth ? 'textPrimary' : 'textSecondary';

    // 各月の最初の日は月情報をつける
    const format = isFirstDay(day) ? 'M月D日' : 'D';

    // 当日かどうかの判断
    const isToday = isSameDay(day, today);


    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                color={textColor}
                align='center'
                variant='caption'
                component='div'
            >
                <span className={isToday ? styles.today : ''}>
                    {day.format(format)}
                </span>
            </Typography>
        </div>
    );
};

export default CalendarElement;