/*
 * @Author: fantiga
 * @Date: 2022-12-31 15:43:01
 * @LastEditTime: 2023-01-02 18:25:06
 * @LastEditors: fantiga
 * @FilePath: /leaderboard-react-ts/src/utils/common.ts
 */

import { IResult } from './interface';

/**
 * @description: Get a random integer in the specified range / 获取指定范围内的随机整数
 * @param {number} min
 * @param {number} max
 * @return {*}
 */
const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * @description: Sort an array of objects in descending order / 降序排序对象数组
 * @param {IResult} data
 * @return {*}
 */
const reSort = (data: IResult[]): IResult[] => data.sort((a, b) => b.score - a.score);

/**
 * @description:
 * Assign the calculation result of the random fraction to the child of the random subscript.
 * 将随机分数的计算结果赋给随机下标的子项。
 * @param {IResult} data
 * @return {*}
 */
export const randomScore = (data: IResult[]): IResult[] => {
  /** Get random subscript / 获取随机下标 */
  const operateItemIndex = getRandomInt(0, data.length);
  /** Shallow copy / 浅拷贝 */
  const newData1 = [...data];
  /** Take out the elements in newData1 and hand them over to newData2. / 取出newData1中的元素，交给newData2。 */
  const newData2 = newData1.splice(operateItemIndex, 1);
  /** Give the score to preScore. / 将score交给preScore。 */
  newData2[0].preScore = newData2[0].score;
  /** Calculate the new score. / 计算新的score。 */
  newData2[0].score += getRandomInt(-1000, 10000);

  return [...newData1, newData2[0]];
};

/**
 * @description: Recalculate ranking / 重新计算排名
 * @param {IResult} data
 * @return {*}
 */
export const calculateRank = (data: IResult[]): IResult[] => (
  reSort([...data])
    .map((item, index) => ({
      ...item,
      preRank: item.rank,
      rank: index
    }))
);

/**
 * @description: Get data asynchronously / 异步获取数据
 * @return {*}
 */
export const getData = async (): Promise<IResult[]> => {
  const apiUrl = 'https://webcdn.17app.co/campaign/pretest/data.json';
  const response = await fetch(apiUrl);
  return response.json();
};
