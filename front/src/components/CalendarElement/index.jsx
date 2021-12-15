// コンポーネントの分離
import React from 'react';

import * as styles from './style.css';

import { Typography } from '@material-ui/core';

const CalendarElement = ({ day }) => {

    // 各月の1日は月情報をつける
    const isFirstDay = day.date() === 1;
    const format = isFirstDay ? 'M月D日' : 'D';

    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                align='center'
                variant='caption'
                component='div'
            >
                {day.format(format)}
            </Typography>
        </div>
    );
};

export default CalendarElement;