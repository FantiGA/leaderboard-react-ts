/*
 * @Author: fantiga
 * @Date: 2022-12-31 15:43:01
 * @LastEditTime: 2022-12-31 20:43:26
 * @LastEditors: fantiga
 * @FilePath: /leaderboard-react-ts/src/utils/common.tsx
 */

import { IResult } from './interface';

/**
 * @description: Sort an array of objects in descending order / 降序排序对象数组
 * @param {IResult} data
 * @return {*}
 */
export const reSort = (data: IResult[]): IResult[] => data.sort((a, b) => b.score - a.score);