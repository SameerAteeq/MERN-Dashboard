import mongoose from "mongoose";

const TransactionScheema = new mongoose.Schema(
  {
    userId: String,
    cost: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);

const Transactions = mongoose.model("Transactions", TransactionScheema);
export default Transactions;
