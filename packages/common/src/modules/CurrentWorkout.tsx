import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { WorkoutCard } from '../ui/WorkoutCard';


interface Props { }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa', //To better view contrast
    margin: 10
  }
});

export const CurrentWorkout: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <WorkoutCard />
    </View>
  );
}