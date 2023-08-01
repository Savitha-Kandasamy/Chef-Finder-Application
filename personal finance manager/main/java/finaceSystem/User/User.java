package finaceSystem.User;
public class User extends UserAccount {
    public User(String username, String password) {
        super(username, password);
    }

    @Override
    public boolean isAdmin() {
        return false;
    }
}
