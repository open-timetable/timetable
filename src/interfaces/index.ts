/**
 * @Date 2023-09-15 00:14:10
 * @Author Zero 1203970284@qq.com
 * @LastEditTime 2023-09-15 00:22:06
 * @FilePath /open-timetable/src/interfaces/index.ts
 * @Copyright (c) 2023 by Zero, All Rights Reserved.
 */

import { TTConfiguration } from "./configuration";
import { TTSingle } from "./single";

export interface TT {
  configuration: TTConfiguration;
  classes: TTSingle[];
}
