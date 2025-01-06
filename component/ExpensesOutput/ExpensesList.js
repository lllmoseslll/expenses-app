import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList data={expenses} />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
