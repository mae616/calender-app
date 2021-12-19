// コンポーネントの分離
import React from 'react';
import Schedule from '../Schedule';

import {
    isSameMonth,
    isFirstDay,
    isSameDay,
    getMonth
} from '../../services/calendar';

import * as styles from './style.css';
import { Typography } from '@material-ui/core';

import dayjs from 'dayjs';

const CalendarElement = ({ day, month, schedules }) => {

    const today = dayjs();

    // 今月以外をグレーダウン
    const currentMonth = getMonth(month);
    const isCurrentMonth = isSameMonth(day, currentMonth);
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
            <div className={styles.schedules}>
                {schedules.map(form => (
                    <Schedule key={form.id} schedule={form} />
                ))}
            </div>
        </div>
    );
};

export default CalendarElement;