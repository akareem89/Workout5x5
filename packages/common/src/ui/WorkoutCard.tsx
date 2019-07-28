import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {

}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  }
});

export const WorkoutCard: React.FC<Props> = () => {
  return (
    <View style={styles.card}>
      <Text>Testing...</Text>
    </View>
  );
}