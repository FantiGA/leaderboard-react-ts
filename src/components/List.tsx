/*
 * @Author: fantiga
 * @Date: 2022-12-25 15:18:35
 * @LastEditTime: 2022-12-31 17:17:35
 * @LastEditors: fantiga
 * @FilePath: /leaderboard-react-ts/src/components/List.tsx
 */

import { FC } from 'react';
import styled from 'styled-components';

import StreamerContainer from './Streamer';

const Wrapper = styled.div`
  font-size: 1.5em;
  min-width: 500px;
  margin: 6em;
`;

const List: FC = () => (
  <Wrapper>
    <StreamerContainer />
  </Wrapper>
);

const ListContainer: FC = () => (
  <List />
);

export default ListContainer;
