import React from 'react';
import styled from 'styled-components';
import color from 'lib/styles/color';

interface EmphasisProps {
  content: string;
}

const Emphasis = ({ content }: EmphasisProps) => {
  return <Container>{content}</Container>;
};

const Container = styled.div`
  font-weight: 500 !important;
  color: ${color.blue2};
`;

export default Emphasis;