/*
 * @Author: fantiga
 * @Date: 2022-12-31 15:26:20
 * @LastEditTime: 2022-12-31 20:44:15
 * @LastEditors: fantiga
 * @FilePath: /leaderboard-react-ts/src/utils/interface.tsx
 */

export interface IResult {
  userID: string,
  displayName: string,
  picture: string,
  score: number;
};

export interface IStreamer {
  streamerData: IResult[];
}
