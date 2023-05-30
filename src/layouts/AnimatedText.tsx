import styled, { css, keyframes } from 'styled-components';

interface CustomAnimationProps {
  animationType?: string;
  duration?: string;
  delay?: string;
  direction?: string;
  timing?: string;
  iteration?: string;
  fillMode?: string;
}

const bounce = keyframes`
0% { transform: scaleY(1); }
10% { transform: scaleY(0.9); }
20% { transform: scaleY(1.1); }
30% { transform: scaleY(0.95); }
40% { transform: scaleY(1.05); }
50% { transform: scaleY(0.98); }
60% { transform: scaleY(1.02); }
70% { transform: scaleY(0.99); }
80% { transform: scaleY(1.01); }
90% { transform: scaleY(1); }
100% { transform: scaleY(1); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const jelly = keyframes`
  0% { transform: scaleX(1); }
  20% { transform: scaleX(0.9); }
  40% { transform: scaleX(1.1); }
  60% { transform: scaleX(0.95); }
  80% { transform: scaleX(1.05); }
  100% { transform: scaleX(1); }
`;

const CustomAnimation = styled.div<CustomAnimationProps>`
  ${({
    animationType = '',
    delay = '0s',
    duration = '1s',
    direction = 'normal',
    timing = 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    iteration = '1',
    fillMode = 'none',
  }) => {
    if (animationType === 'bounce') {
      return css`
        animation: ${bounce} 1s ${timing} ${delay} ${iteration} ${direction}
          ${fillMode};
      `;
    }
    if (animationType === 'fadeOut') {
      return css`
        animation: ${fadeOut} ${duration} ${timing} ${delay} ${iteration}
          ${direction} ${fillMode};
      `;
    }
    if (animationType === 'jelly') {
      return css`
        animation: ${jelly} ${duration} ${timing} ${delay} ${iteration}
          ${direction} ${fillMode};
      `;
    }
    return '';
  }}
`;

export default CustomAnimation;
