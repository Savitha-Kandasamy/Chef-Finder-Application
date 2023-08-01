package finaceSystem.Income;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import finaceSystem.MySQLConnection;

public class IncomeDAO {
    private Connection connection;

    public IncomeDAO() {
        try {
            connection = MySQLConnection.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void addIncome(Income income) {
        String sql = "INSERT INTO income (amount, description) VALUES (?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setDouble(1, income.getAmount());
            statement.setString(2, income.getDescription());
            statement.executeUpdate();
            System.out.println("Income added successfully.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<Income> getAllIncomes() {
        List<Income> incomes = new ArrayList<>();
        String sql = "SELECT * FROM income";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                double amount = resultSet.getDouble("amount");
                String description = resultSet.getString("description");
                Income income = new Income(amount, description);
                income.setId(id);
                incomes.add(income);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return incomes;
    }
    
    public double getTotalIncome() {
        double totalIncome = 0;
        String sql = "SELECT SUM(amount) AS total_income FROM income";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                totalIncome = resultSet.getDouble("total_income");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return totalIncome;
    }

    // Implement other CRUD methods for Income
}
