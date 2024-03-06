import React, {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';

type GoalInputProps = {
  addEnteredGoal: (goal: string) => void;
  ToggleIsGoalModalVisible: () => void;
  isGoalModalVisible: boolean;
};

export const GoalInput = (props: GoalInputProps) => {
  const [goalText, setGoalText] = useState<string>('');

  const getEnteredText = (e: any) => {
    setGoalText(e);
  };

  const addGoal = () => {
    props.addEnteredGoal(goalText);
    setGoalText('');
    props.ToggleIsGoalModalVisible();
  };

  const onCancel = () => {
    props.ToggleIsGoalModalVisible();
  };

  return (
    <Modal visible={props.isGoalModalVisible} animationType="slide">
      <View style={styles.goalsTextInputContainer}>
        <Image
          source={require('../assets/goal.png')}
          style={{width: 100, height: 100, marginBottom: 20}}
        />
        <TextInput
          placeholder="Enter the Task"
          style={styles.goalsTextInput}
          onChangeText={getEnteredText}
          value={goalText}
        />
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={styles.buttonStyle}>
            <Button title="ADD TASK" onPress={addGoal} />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="CANCEL" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  goalsTextInput: {
    borderWidth: 1,
    borderColor: 'lightpink',
    backgroundColor: 'lightpink',
    borderRadius: 6,
    padding: 16,
    width: '100%',
    fontSize: 12,
    color: 'black',
  },
  goalsTextInputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'purple',
  },
  buttonStyle: {
    width: 200,
  },
});
