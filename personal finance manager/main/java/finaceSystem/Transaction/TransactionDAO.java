package finaceSystem.Transaction;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import finaceSystem.MySQLConnection;

public class TransactionDAO {
    private Connection connection;

    public TransactionDAO() {
        try {
            connection = MySQLConnection.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void addTransaction(Transaction transaction) {
        String sql = "INSERT INTO transaction (amount, description, type) VALUES (?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setDouble(1, transaction.getAmount());
            statement.setString(2, transaction.getDescription());
            statement.setString(3, transaction.getType().toString());
            statement.executeUpdate();
            System.out.println("Transaction added successfully.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<Transaction> getAllTransactions() {
        List<Transaction> transactions = new ArrayList<>();
        String sql = "SELECT * FROM transaction";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                double amount = resultSet.getDouble("amount");
                String description = resultSet.getString("description");
                String typeStr = resultSet.getString("type");
                TransactionType type = TransactionType.valueOf(typeStr);

                Transaction transaction = new Transaction(amount, description, type);
                transaction.setId(id);
                transactions.add(transaction);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return transactions;
    }

    public Transaction getTransactionById(int id) {
        Transaction transaction = null;
        String sql = "SELECT * FROM transaction WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setInt(1, id);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                double amount = resultSet.getDouble("amount");
                String description = resultSet.getString("description");
                String typeStr = resultSet.getString("type");
                TransactionType type = TransactionType.valueOf(typeStr);

                transaction = new Transaction(amount, description, type);
                transaction.setId(id);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return transaction;
    }

    public double getTotalTransactionAmount(TransactionType type) {
        double totalAmount = 0;
        String sql = "SELECT SUM(amount) AS total_amount FROM transaction WHERE type = ?";
        try (PreparedStatement statement = connection.prepareStatement(sql)) {
            statement.setString(1, type.toString());
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                totalAmount = resultSet.getDouble("total_amount");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return totalAmount;
    }

    // Implement other CRUD methods for Transaction
}
