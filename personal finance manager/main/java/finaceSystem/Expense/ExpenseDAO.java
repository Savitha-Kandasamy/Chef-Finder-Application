package finaceSystem.Expense;

import finaceSystem.TransactionItem;
import finaceSystem.MySQLConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ExpenseDAO {
    private Connection connection;

    public ExpenseDAO() {
        try {
            connection = MySQLConnection.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void addExpense(TransactionItem expense) {
        String sql = "INSERT INTO expense (amount, description) VALUES (?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setDouble(1, expense.getAmount());
            statement.setString(2, expense.getDescription());
            statement.executeUpdate();
            System.out.println("Expense added successfully.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<TransactionItem> getAllExpenses() {
        List<TransactionItem> expenses = new ArrayList<>();
        String sql = "SELECT * FROM expense";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                double amount = resultSet.getDouble("amount");
                String description = resultSet.getString("description");
                TransactionItem expense = new Expense(amount, description);
                ((Expense) expense).setId(id); // Cast to Expense to set ID
                expenses.add(expense);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return expenses;
    }

    public double getTotalExpense() {
        double totalExpense = 0;
        String sql = "SELECT SUM(amount) AS total_expense FROM expense";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                totalExpense = resultSet.getDouble("total_expense");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return totalExpense;
    }

    // Implement other CRUD methods for Expense
}
