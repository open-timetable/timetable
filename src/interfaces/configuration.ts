/**
 * @Date 2023-09-15 00:10:22
 * @Author Zero 1203970284@qq.com
 * @LastEditTime 2023-09-15 10:40:58
 * @FilePath /open-timetable/src/interfaces/configuration.ts
 * @Copyright (c) 2023 by Zero, All Rights Reserved.
 */

import { TTWeek } from "./time";

export interface TTConfiguration {
  /**
   * 学校名称
   *
   * @author Zero <gczgroup@qq.com>
   * @date 15/09/2023
   * @type {string}
   * @memberof TTConfiguration
   */
  school: string;

  /**
   * 学校地址
   *
   * @author Zero <gczgroup@qq.com>
   * @date 15/09/2023
   * @type {string}
   * @memberof TTConfiguration
   */
  schoolLocation?: string;

  /**
   * 第一周
   *
   * @author Zero <gczgroup@qq.com>
   * @date 15/09/2023
   * @type {TTWeek}
   * @memberof TTConfiguration
   */
  firstWeek: TTWeek;

  /**
   * 总周数
   *
   * @author Zero <gczgroup@qq.com>
   * @date 15/09/2023
   * @type {number}
   * @memberof TTConfiguration
   */
  totalWeek: number;

  /**
   * 一天有几节课
   *
   * @author Zero <gczgroup@qq.com>
   * @date 15/09/2023
   * @type {number}
   * @memberof TTConfiguration
   */
  classOfSingleDay: number;
}
