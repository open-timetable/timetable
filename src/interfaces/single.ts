/**
 * @Date 2023-09-15 00:15:58
 * @Author Zero 1203970284@qq.com
 * @LastEditTime 2023-09-15 00:28:38
 * @FilePath /open-timetable/src/interfaces/single.ts
 * @Copyright (c) 2023 by Zero, All Rights Reserved.
 */

import { TTTime } from "./time";

export interface TTSingle {
  className: string;
  classLocation: string;
  classTeacher: string;
  classTime: TTTime;
  whichClass: number;
}
