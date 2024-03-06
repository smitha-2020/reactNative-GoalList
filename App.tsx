import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GoalInput} from './src/components/GoalInput';
import {GoalList} from './src/components/GoalList';

export type goalListProps = {text: string; id: number};

export default function App() {
  const [isGoalModalVisible, setIsGoalModalVisible] = useState<boolean>(false);
  const [goalsList, setGoalsList] = useState<goalListProps[]>([]);

  const addEnteredGoal = (goal: string) => {
    setGoalsList(currentGoalsList => [
      ...currentGoalsList,
      {text: goal, id: Math.floor(Math.random() * 100)},
    ]);
  };

  const deleteGoal = (id: number) => {
    setGoalsList(currentGoalsList => {
      return currentGoalsList.filter(item => item.id !== id);
    });
  };

  const ToggleIsGoalModalVisible = () => {
    setIsGoalModalVisible(!isGoalModalVisible);
  };

  return (
    <View style={styles.outerContainer}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable onPress={ToggleIsGoalModalVisible}>
          <Text>Add Goal</Text>
        </Pressable>
      </View>

      <GoalInput
        addEnteredGoal={addEnteredGoal}
        ToggleIsGoalModalVisible={ToggleIsGoalModalVisible}
        isGoalModalVisible={isGoalModalVisible}
      />
      <GoalList goalsList={goalsList} deleteGoal={deleteGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});
