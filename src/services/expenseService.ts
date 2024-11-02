import { Expense } from "../models/Expense";

let expenses: Expense[] = [];
let nextId = 1;

export const getAllExpenses = (): Expense[] => {
  return expenses;
};

export const addExpense = (expense: Omit<Expense, "id">): Expense => {
  const newExpense = { id: nextId++, ...expense };
  expenses.push(newExpense);
  return newExpense;
};

export const updateExpense = (
  id: number,
  updatedExpense: Omit<Expense, "id">
): Expense | undefined => {
  const index = expenses.findIndex((exp) => exp.id === id);
  if (index !== -1) {
    expenses[index] = { id, ...updatedExpense };
    return expenses[index];
  }
  return undefined;
};

export const deleteExpense = (id: number): boolean => {
  const index = expenses.findIndex((exp) => exp.id === id);
  if (index !== -1) {
    expenses.splice(index, 1);
    return true;
  }
  return false;
};
