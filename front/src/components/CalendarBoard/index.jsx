import React from 'react';

import { ImageList } from '@material-ui/core';

import CalendarElement from '../CalendarElement';
import { createCalendar } from '../../services/calendar'
import * as styles from './style.css';

const calendar = createCalendar();

const CalendarBoard = () => {

    console.log(calendar);

    return (
        <div className={styles.container}>
            <ImageList className={styles.grid} cols={7} gap={0} rowHeight="auto">
                {calendar.map(day => (
                    <li key={day.toISOString()}>
                        <CalendarElement day={day}></CalendarElement>
                    </li>
                ))}
            </ImageList>
        </div >
    );
};

export default CalendarBoard;