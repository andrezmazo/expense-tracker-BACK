import express from "express";
import expenseRoutes from "./routes/expenseRoutes";

const app = express();
app.use(express.json());

app.use("/api/expenses", expenseRoutes);

export default app;
