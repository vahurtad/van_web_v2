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
  10% { transform: scaleY(0.9) translateY(5%); }
  45% { transform: scaleY(1.2) translateY(-100%); }
  65% { transform: scaleY(0.95) translateY(0); }
  75% { transform: scaleY(1.05) translateY(-25%); }
  85% { transform: scaleY(1) translateY(0); }
  100% { transform: scaleY(1) translateY(0%); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const jelly = keyframes`
  0% { transform: scaleX(1); }
  20% { transform: scaleX(0.9); }
  50% { transform: scaleX(1.25); }
  85% { transform: scaleX(0.8); }
  100% { transform: scaleX(1); }
`;

const CustomAnimation = styled.div<CustomAnimationProps>`
  ${({
    animationType,
    duration,
    delay,
    direction,
    timing,
    iteration,
    fillMode,
  }) => {
    if (animationType === 'bounce') {
      return css`
        animation: ${bounce} ${duration || '1s'} ${timing || 'ease'}
          ${delay || '0s'} ${iteration || '1'} ${direction || 'normal'}
          ${fillMode || 'none'};
      `;
    }
    if (animationType === 'fadeOut') {
      return css`
        animation: ${fadeOut} ${duration || '1s'} ${timing || 'ease'}
          ${delay || '0s'} ${iteration || '1'} ${direction || 'normal'}
          ${fillMode || 'none'};
      `;
    }
    if (animationType === 'jelly') {
      return css`
        animation: ${jelly} ${duration || '1s'} ${timing || 'ease'}
          ${delay || '0s'} ${iteration || '1'} ${direction || 'normal'}
          ${fillMode || 'none'};
      `;
    }
    return '';
  }}
`;

export default CustomAnimation;
