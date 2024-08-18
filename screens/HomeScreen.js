// screens/HomeScreen.js
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export default function HomeScreen({ navigation }) {
  return (
    <Container>
      <StyledText>Welcome to the Home Screen!</StyledText>
      <StyledButton onPress={() => navigation.navigate('Details')}>
        <ButtonText>Go to Details</ButtonText>
      </StyledButton>
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
  margin-bottom: 20px;
`;

const StyledButton = styled(TouchableOpacity)`
  background-color: #6200ee;
  padding: 15px 30px;
  border-radius: 5px;
`;

const ButtonText = styled(Text)`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;
