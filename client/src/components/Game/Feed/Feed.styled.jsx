import styled from 'styled-components';
import red from 'components/images/red.png';
import yellow from 'components/images/yellow.png';
import green from 'components/images/green.png';

export const Fruit = styled.div`
  position: absolute;
  width: 4%;
  height: 4%;
  border: 2px solid #fff;
  z-index: 2;
  background-color: transparent;
  background-image: ${(props) => {
    switch (props.color) {
      case 'red':
        return `url(${red})`;
      case 'yellow':
        return `url(${yellow})`;
      case 'green':
        return `url(${green})`;
      // no default
    }
  }};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
