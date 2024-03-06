import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {goalListProps} from '../../App';

type ItemProps = {title: string; id: number; deleteGoal: (id: number) => void};
type GoalListProps = {
  goalsList: goalListProps[];
  deleteGoal: (id: number) => void;
};

const Item = ({title, id, deleteGoal}: ItemProps) => (
  <Pressable onPress={() => deleteGoal(id)}>
    <View style={styles.goalListRow}>
      <Text style={{fontSize: 12, color: 'white'}}>{title}</Text>
    </View>
  </Pressable>
);

export const GoalList = ({goalsList, deleteGoal}: GoalListProps) => {
  return (
    <View style={styles.goalsListingContainer}>
      <FlatList
        data={goalsList}
        renderItem={({item}) => (
          <Item title={item.text} id={item.id} deleteGoal={deleteGoal} />
        )}
        keyExtractor={item => 'key' + item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsListingContainer: {
    //alignItems: 'center',
    marginTop: 10,
    flex: 5,
    backgroundColor: 'pink',
    //backgroundColor: 'pink',
  },
  goalListRow: {
    backgroundColor: 'purple',
    padding: 3,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 5,
  },
});
