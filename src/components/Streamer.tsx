/*
 * @Author: fantiga
 * @Date: 2022-12-25 15:18:46
 * @LastEditTime: 2022-12-31 20:42:27
 * @LastEditors: fantiga
 * @FilePath: /leaderboard-react-ts/src/components/Streamer.tsx
 */

import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { IResult, IStreamer } from '@utils/interface';
import { reSort } from '@utils/common';

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

const Score = styled.span`
  text-align: right;
  margin-left: .5em;
  flex-grow: 1;
`;

const StreamerDataList = styled.div`
  display: flex;
  align-items: center;
  align-content: flex-start;
  margin: .5em 0;
`;

const Streamer: FC<IStreamer> = (props) => {
  return <>
    {
      props.streamerData.map((streamer, index) => {
        return <StreamerDataList key={index}>
          <SerialNumber>{index + 1}</SerialNumber>
          <Avatar src={streamer.picture} />
          <Name>{streamer.displayName}</Name>
          <Score>{streamer.score}pt</Score>
        </StreamerDataList>;
      })
    }
  </>;
};

const StreamerContainer: FC = () => {
  const [streamerData, setStreamerData] = useState<IResult[]>([
    {
      "userID": "4f4d5462-4a9f-483e-b620-9df9c13ec840",
      "displayName": "Jone",
      "picture": "https://assets-17app.akamaized.net/THUMBNAIL_525BEE6E-94B5-4C7F-AB47-1A6F9735EE82.jpg",
      "score": 157000
    },
    {
      "userID": "2c0c5c67-1cfc-4b99-992e-2918b8a0dcc1",
      "displayName": "Victoria",
      "picture": "https://assets-17app.akamaized.net/THUMBNAIL_8390066D-46E4-4741-968D-9FF84B276B52.jpg",
      "score": 46200
    },
    {
      "userID": "5100dedb-c2e5-48da-aeaf-83fa49a3482d",
      "displayName": "Joy",
      "picture": "https://assets-17app.akamaized.net/THUMBNAIL_CE9F51C5-7006-4DE6-9059-9AEA98F7DF13.jpg",
      "score": 38800
    },
    {
      "userID": "9ece1a05-eb2d-403a-b179-ccbfc0ad9250",
      "displayName": "Quinn",
      "picture": "https://assets-17app.akamaized.net/THUMBNAIL_2A847B03-7BE8-4645-B62A-07201A90EDEF.jpg",
      "score": 33400
    },
    {
      "userID": "32afdaac-a83b-481f-bc5a-1e85c3188c6f",
      "displayName": "Sheenalo",
      "picture": "https://assets-17app.akamaized.net/THUMBNAIL_95D163ED-6BF8-4D09-897C-B2E5320BE462.jpg",
      "score": 31600
    },
    {
      "userID": "a2e0bdd3-0aa0-4fc4-91c2-b8ad00d26211",
      "displayName": "Charlene",
      "picture": "https://assets-17app.akamaized.net/THUMBNAIL_a943a748-16c8-4afa-87a6-8b6ac0e1f47a.jpg",
      "score": 30800
    },
    {
      "userID": "47a35fbb-ce6b-4c82-9973-2a9391b6478d",
      "displayName": "LeonaBaby",
      "picture": "https://assets-17app.akamaized.net/THUMBNAIL_B850B9FF-E1FD-4DFA-8737-E67E32B71B8B.jpg",
      "score": 22300
    },
    {
      "userID": "db8c493f-0a53-4b5f-8ffe-b0967e076e03",
      "displayName": "Sunny",
      "picture": "https://assets-17app.akamaized.net/THUMBNAIL_1A36F357-6EA2-4C77-B26F-588319F26EF2.jpg",
      "score": 17800
    },
    {
      "userID": "44e1f164-831d-4732-8e49-0cda24369000",
      "displayName": "ImWord",
      "picture": "https://assets-17app.akamaized.net/THUMBNAIL_4f761f7d-0b85-45dd-90ad-1444c548abd6.jpg",
      "score": 17300
    },
    {
      "userID": "416089f2-f66a-411a-b275-2151d86dcaeb",
      "displayName": "Dophine",
      "picture": "https://assets-17app.akamaized.net/THUMBNAIL_59946513-FC72-4444-8CC9-991BFFF19C22.jpg",
      "score": 15400
    }
  ]);
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  /**
   * @description:
   * Assign the calculation result of the random fraction to the child of the random subscript
   * 将随机分数的计算结果赋给随机下标的子项
   * @param {IResult} data
   * @return {*}
   */
  const randomScore = (data: IResult[]): void => {
    const operateItemIndex = getRandomInt(0, data.length);
    const newData1 = [...data];
    const newData2 = newData1.splice(operateItemIndex, 1);
    newData2[0].score += getRandomInt(-10000, 10000);

    const newData = reSort([...newData1, newData2[0]]);
    setStreamerData(newData);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      randomScore(streamerData);
    }, 400);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Streamer streamerData={streamerData} />;
};

export default StreamerContainer;
