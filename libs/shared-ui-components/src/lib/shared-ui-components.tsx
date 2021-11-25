import styled from 'styled-components';
import { SharedUiComponentsProps } from '@football-project/types';
/* eslint-disable-next-line */
const StyledSharedUiComponents = styled.div`
  color: pink;
`;

export function SharedUiComponents(props: SharedUiComponentsProps) {
  const {title, showTitle} = props;
  return (
    <StyledSharedUiComponents>
      <h1>{showTitle && title}</h1>
    </StyledSharedUiComponents>
  );
}

export default SharedUiComponents;
