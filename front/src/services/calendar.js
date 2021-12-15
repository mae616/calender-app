// ロジックの分離
import dayjs from 'dayjs';

export const createCalendar = () => {

    // 今月の最初の日を取得
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

// 同じ年月日かどうか判定
export const isSameDay = (day1, day2) => {
    const compareFormat = 'YYYYMMDD';
    // 文字列に変換した上で全く同じ文字列になっているか（＝同じ日か）という判定
    return day1.format(compareFormat) === day2.format(compareFormat);
};

// 同じ年月かどうか判定
export const isSameMonth = (day1, day2) => {
    const compareFormat = 'YYYYMM';
    // 文字列に変換した上で全く同じ文字列になっているか（＝同じ日か）という判定
    return day1.format(compareFormat) === day2.format(compareFormat);
};

// 1日かどうか判定
export const isFirstDay = day => day.date() === 1;
