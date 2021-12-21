import dayjs from 'dayjs';
import { isSameDay } from './calendar';

// 引数として受け取ったschedulesのうち、それぞれのcalendarの日付に一致するものだけをfilterしてセットしている
export const setSchedules = (calendar, schedules) =>
    calendar.map(day => ({
        date: day,
        schedules: schedules.filter(form => isSameDay(form.date, day))
    }));

// dateのISOStringを、dayjsのインスタンスにする
export const formatSchedule = schedule => ({
    ...schedule,
    date: dayjs(schedule.date)
});