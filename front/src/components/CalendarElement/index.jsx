// コンポーネントの分離
import React from 'react';

import * as styles from './style.css';
import { Typography } from '@material-ui/core';
import dayjs from 'dayjs';

const CalendarElement = ({ day }) => {

    // 各月の1日は月情報をつける
    const isFirstDay = day.date() === 1;
    const format = isFirstDay ? 'M月D日' : 'D';

    // 当日かどうかの判断
    const today = dayjs();
    const compareFormat = 'YYYYMMDD';
    // 文字列に変換した上で全く同じ文字列になっているか（＝同じ日か）という判定
    const isToday = day.format(compareFormat) === today.format(compareFormat);

    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
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