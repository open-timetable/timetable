/**
 * @Date 2023-09-15 00:39:08
 * @Author Zero 1203970284@qq.com
 * @LastEditTime 2023-09-15 00:39:13
 * @FilePath /open-timetable/test/test.ts
 * @Copyright (c) 2023 by Zero, All Rights Reserved.
 */

import { OpenTimeTable } from "../src";

export const data: OpenTimeTable = {
  configuration: {
    firstWeek: {
      month: 1,
      weekCount: 2,
      year: 2023,
    },
    totalWeek: 20,
    classOfSingleDay: 5,
  },
  classes: [
    {
      classLocation: "401",
      className: "英语",
      classTeacher: "英语老师",
      classTime: {
        startTime: {
          hour: 12,
          minute: 1,
          second: 0,
        },
        endTime: {
          hour: 12,
          minute: 1,
          second: 0,
        },
        week: 1,
        weekCount: [1],
      },
      whichClass: 1,
    },
  ],
};
