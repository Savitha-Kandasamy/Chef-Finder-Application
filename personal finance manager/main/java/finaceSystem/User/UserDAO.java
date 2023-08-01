package finaceSystem.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import finaceSystem.MySQLConnection;

public class UserDAO {
    private List<UserAccount> users;

    public UserDAO() {
        users = new ArrayList<>();

        users.add(new User("user", "userpassword"));
        users.add(new User("admin", "adminpassword"));
    }

    public UserAccount getUserByUsername(String username) {
        for (UserAccount user : users) {
            if (user.getUsername().equals(username)) {
                return user;
            }
        }
        return null; // User not found
    }

    public List<UserAccount> getAllUsers() {
        return users;
    }

    public void addUserAccount(UserAccount userAccount) {
        // Add the userAccount to the data structure (e.g., database or list)
        users.add(userAccount);
    }
    public void addUserToDatabase(UserAccount user) {
        String insertQuery = "INSERT INTO users (username, password) VALUES (?, ?)";

        try (Connection connection = MySQLConnection.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(insertQuery)) {
            preparedStatement.setString(1, user.getUsername());
            preparedStatement.setString(2, user.getPassword());
            preparedStatement.executeUpdate();
            System.out.println("User added to the database successfully.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
