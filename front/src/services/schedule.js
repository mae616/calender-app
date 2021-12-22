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

// Confirmを出す
export const isCloseDialog = schedule => {
    const message = '保存されていない変更を破棄しますか？';

    // scheduleが空でないときにのみ confirm を出したい
    // isScheduleEmpty(schedule) === trueのときは短絡評価によりwindow.confirm(message)が評価される前にtrueが返される
    return isScheduleEmpty(schedule) || window.confirm(message);
};


// 予定の追加の途中でdialogを閉じようとしたときにconfirmを出すか判断
// 全部空であるかどうかを判断したい
// 条件式!schedule.titleは空のときにtrue
const isScheduleEmpty = schedule =>
    !schedule.title && !schedule.description && !schedule.location;