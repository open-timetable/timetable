/**
 * @Date 2023-09-15 00:39:08
 * @Author Zero 1203970284@qq.com
 * @LastEditTime 2023-09-15 10:54:31
 * @FilePath /open-timetable/test/test.ts
 * @Copyright (c) 2023 by Zero, All Rights Reserved.
 */

import { OpenTimeTable } from "../src";

export const data: OpenTimeTable = [
  {
    configuration: {
      school: "广州松田职业学院",
      schoolLocation: "中国广东省广州市增城区朱村大道东432号",
      totalWeek: 20,
      classOfSingleDay: 5,
      firstWeek: {
        month: 1,
        weekCount: 2,
        year: 2023,
      },
    },
    classes: {
      英语: [
        {
          classLocation: "401",
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
      数学: [
        {
          classLocation: "401",
          classTeacher: "数学老师",
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
    },
  },
];
