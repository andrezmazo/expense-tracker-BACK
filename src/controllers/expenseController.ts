import { Request, Response } from "express";
import { Expense } from "../models/Expense";
import * as expenseService from "../services/expenseService";

export const getExpenses = (req: Request, res: Response) => {
  const expenses = expenseService.getAllExpenses();
  res.json(expenses);
};

export const addExpense = (req: Request, res: Response) => {
  const { amount, category, date, description } = req.body;
  const newExpense = expenseService.addExpense({
    amount,
    category,
    date,
    description,
  });
  res.status(201).json(newExpense);
};

export const updateExpense = (req: Request, res: Response) => {
  const { id } = req.params;
  const { amount, category, date, description } = req.body;
  const updatedExpense = expenseService.updateExpense(Number(id), {
    amount,
    category,
    date,
    description,
  });

  if (updatedExpense) {
    res.json(updatedExpense);
  } else {
    res.status(404).send("Expense not found");
  }
};

export const deleteExpense = (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = expenseService.deleteExpense(Number(id));

  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).send("Expense not found");
  }
};
