import { Router } from "express";
import * as expenseController from "../controllers/expenseController";

const router = Router();

router.get("/", expenseController.getExpenses);
router.post("/", expenseController.addExpense);
router.put("/:id", expenseController.updateExpense);
router.delete("/:id", expenseController.deleteExpense);

export default router;
