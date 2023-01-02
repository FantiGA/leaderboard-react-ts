/*
 * @Author: fantiga
 * @Date: 2022-12-25 15:18:46
 * @LastEditTime: 2023-01-02 19:01:00
 * @LastEditors: fantiga
 * @FilePath: /leaderboard-react-ts/src/components/Streamer.tsx
 */

import { FC, useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import { IResult, IStreamer } from '@utils/interface';
import { calculateRank, getData, randomScore } from '@utils/common';

import ScoreContainer from './Score';

const SerialNumber = styled.span`
  width: 2em;
  text-align: center;
`;

const Avatar = styled.img`
  width: 2em;
  height: 2em;
  border-radius: 100%;
  margin-left: .5em;
`;

const Name = styled.span`
  margin-left: .5em;
`;

const StreamerDataList = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  align-content: flex-start;
  margin: .5em 0;
  transition: transform 0.4s ease;
`;

const Streamer: FC<IStreamer> = ({ streamerData }) => {
  return <>
    {
      streamerData.map(({
        rank,
        // preRank,
        picture,
        displayName,
        score,
        preScore
      }, index) => {
        return <StreamerDataList key={index} style={{
          transform: `translateY(${rank * 60 + "px"})`,
        }}>
          <SerialNumber>{rank + 1}</SerialNumber>
          <Avatar src={picture} alt={displayName} />
          <Name>{displayName}</Name>
          <ScoreContainer score={score} preScore={preScore} />
        </StreamerDataList>;
      })
    }
  </>;
};

const StreamerContainer: FC = () => {
  const [streamerData, setStreamerData] = useState<IResult[]>([]);

  /**
   * @description:
   * Get data asynchronously, only for the first time execution.
   * 异步获取数据，仅第一次执行。
   * @return {*}
   */
  useEffect(() => {
    if (!streamerData.length) {
      getData().then(data => setStreamerData(calculateRank(data)));
    }
  }, []);

  /**
   * @description:
   * Timed calls, with an interval of 3 seconds.
   * 定时调用，间隔3秒。
   * @return {*}
   */
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (streamerData.length) {
        const modifiedData = randomScore(streamerData);
        const reSortedData = calculateRank(modifiedData);

        modifiedData.forEach(item => {
          const rankedUser = reSortedData.find(x => x.userID === item.userID);
          item.preRank = rankedUser?.preRank || 0;
          item.rank = rankedUser?.rank || 0;
        });

        setStreamerData(modifiedData);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [streamerData]);

  return <Streamer streamerData={streamerData} />;
};

export default StreamerContainer;
