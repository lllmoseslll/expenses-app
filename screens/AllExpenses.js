import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../component/ExpensesOutput/ExpensesOutput";

const AllExpenses = () => {
  return (
    <View>
      <ExpensesOutput expensesPeriod={"Total"} />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
