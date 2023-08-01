package finaceSystem.Expense;
import finaceSystem.TransactionItem;

public class Expense implements TransactionItem {
    private int id;
    private double amount;
    private String description;

    public Expense(double amount, String description) {
        this.amount = amount;
        this.description = description;
    }
    @Override
    public String toString() {
        return "Expense{" +
                "id=" + id +
                ", amount=" + amount +
                ", description='" + description + '\'' +
                '}';
    }

    @Override
    public double getAmount() {
        return amount;
    }

    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public String getType() {
        return "Expense";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
