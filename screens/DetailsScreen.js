// screens/DetailsScreen.js
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function DetailsScreen() {
  return (
    <Container>
      <StyledText>This is the Details Screen!</StyledText>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

const StyledText = styled(Text)`
  color: #333;
  font-size: 18px;
`;
