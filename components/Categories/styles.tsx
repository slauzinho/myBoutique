import styled from 'styled-components';
import { Text } from 'react-native';

interface TitleProps {
  readonly active: boolean;
}
export const Title = styled(Text)<TitleProps>`
  font-weight: ${props => (props.active ? 700 : 400)};
`;
