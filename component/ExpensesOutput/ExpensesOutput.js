import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-12-09"),
  },
  {
    id: "e3",
    description: "A BOOK",
    amount: 89.99,
    date: new Date("2021-1-19"),
  },
  {
    id: "e4",
    description: "Fruits",
    amount: 59.99,
    date: new Date("2020-2-19"),
  },
  {
    id: "e5",
    description: "A bick",
    amount: 90.99,
    date: new Date("2022-12-09"),
  },
  {
    id: "e6",
    description: "A Knife",
    amount: 89.99,
    date: new Date("2023-1-01"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({});
