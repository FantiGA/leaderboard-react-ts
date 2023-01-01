/*
 * @Author: fantiga
 * @Date: 2023-01-01 18:48:48
 * @LastEditTime: 2023-01-01 20:45:12
 * @LastEditors: fantiga
 * @FilePath: /leaderboard-react-ts/src/components/Score.tsx
 */

import { FC, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { IScoreContainer, IScoreUI } from '@utils/interface';

const ScoreUI = styled.span`
  text-align: right;
  margin-left: .5em;
  flex-grow: 1;
  animation-duration: 2s;
  animation-timing-function: linear;
  transition-duration: 1s;
`;

const Score: FC<IScoreUI> = ({ displayScore }) => <ScoreUI>{displayScore}</ScoreUI>;

const ScoreContainer: FC<IScoreContainer> = ({ score, preScore }) => {
  const [displayScore, setDisplayScore] = useState<number>(score);

  const diff = useMemo(() => {
    const temp = Math.floor((score - preScore) / 10);
    return temp ? temp : 1;
  }, [preScore, score]);

  useEffect(() => {
    if (score === preScore || preScore === 0) return;
    const scoreAnimation = requestAnimationFrame(() => {
      if (preScore && displayScore + diff <= score) {
        setDisplayScore(displayScore + diff);
      } else {
        setDisplayScore(score);
      }
    });

    return () => cancelAnimationFrame(scoreAnimation);
  }, [score, displayScore, diff, preScore]);

  return <Score displayScore={displayScore} />;
};

export default ScoreContainer;
