import express from "express";
import expenseRoutes from "./routes/expenseRoutes";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://andrezmazo.github.io/expense-tracker"
    ],
  })
);)
);
app.use(express.json());

app.use("/api/expenses", expenseRoutes);

export default app;
