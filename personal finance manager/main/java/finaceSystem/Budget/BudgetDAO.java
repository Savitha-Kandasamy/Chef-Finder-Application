package finaceSystem.Budget;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import finaceSystem.MySQLConnection;

public class BudgetDAO {
    private Connection connection;

    public BudgetDAO() {
        try {
            connection = MySQLConnection.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void addBudget(Budget budget) {
        String sql = "INSERT INTO budget (amount, description) VALUES (?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setDouble(1, budget.getAmount());
            statement.setString(2, budget.getDescription());
            statement.executeUpdate();
            System.out.println("Budget added successfully.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<Budget> getAllBudgets() {
        List<Budget> budgets = new ArrayList<>();
        String sql = "SELECT * FROM budget";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                double amount = resultSet.getDouble("amount");
                String description = resultSet.getString("description");
                Budget budget = new Budget(amount, description);
                budget.setId(id);
                budgets.add(budget);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return budgets;
    }

    // Implement other CRUD methods for Budget
}
