/**
 * @Date 2023-09-15 00:17:07
 * @Author Zero 1203970284@qq.com
 * @LastEditTime 2023-09-15 10:35:44
 * @FilePath /open-timetable/src/interfaces/time.ts
 * @Copyright (c) 2023 by Zero, All Rights Reserved.
 */
import { HOUR, MONTH, MinuteOrSecond, WEEK, WEEKCOUNT } from "./baseTime";
export interface TTWeek {
    /**
     * 年份
     *
     * @author Zero <gczgroup@qq.com>
     * @date 15/09/2023
     * @type {number}
     * @memberof TTWeek
     */
    year: number;
    /**
     * 月份
     *
     * @author Zero <gczgroup@qq.com>
     * @date 15/09/2023
     * @type {MONTH}
     * @memberof TTWeek
     */
    month: MONTH;
    /**
     * 周数
     *
     * @author Zero <gczgroup@qq.com>
     * @date 15/09/2023
     * @type {number}
     * @memberof TTWeek
     */
    weekCount: WEEKCOUNT;
}
export interface TTTimezone {
    hour: HOUR;
    minute: MinuteOrSecond;
    second: MinuteOrSecond;
}
export interface TTTime {
    week: WEEK;
    weekCount: number[];
    startTime: TTTimezone;
    endTime: TTTimezone;
}
