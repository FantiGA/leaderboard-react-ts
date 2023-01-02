/*
 * @Author: fantiga
 * @Date: 2022-12-31 15:26:20
 * @LastEditTime: 2023-01-02 18:12:25
 * @LastEditors: fantiga
 * @FilePath: /leaderboard-react-ts/src/utils/interface.ts
 */

export interface IScoreUI {
  displayScore: number;
};

export interface IScoreContainer {
  score: number;
  preScore: number;
};

export interface IResult {
  userID: string,
  displayName: string,
  picture: string,
  score: number;
  preScore: number;
  rank: number;
  preRank: number;
};

export interface IStreamer {
  streamerData: IResult[];
}
