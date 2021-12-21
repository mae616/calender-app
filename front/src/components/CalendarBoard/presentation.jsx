// 表示にのみ責務をもつコンポーネント
import React, { useEffect } from 'react';

import CalendarElement from '../CalendarElement';

import {
    ImageList,
    Typography
} from '@material-ui/core';
import * as styles from './style.css';

const week = ['日', '月', '火', '水', '木', '金', '土'];

const CalendarBoard = ({
    calendar,
    month,
    openAddScheduleDialog,
    openCurrentScheduleDialog,
    fetchSchedule
}) => {

    useEffect(() => {
        // 画面初期表示時の予定の取得
        // 非同期処理
        fetchSchedule();
    }, []);

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
                {calendar.map(({ date, schedules }) => (
                    <li key={date.toISOString()} onClick={() => openAddScheduleDialog(date)}>
                        <CalendarElement
                            day={date}
                            month={month}
                            schedules={schedules}
                            onClickSchedule={openCurrentScheduleDialog}
                        />
                    </li>
                ))}
            </ImageList>
        </div >
    );
};

export default CalendarBoard;