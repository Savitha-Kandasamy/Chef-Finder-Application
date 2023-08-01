package finaceSystem.User;
public class Admin extends UserAccount {
    public Admin(String username, String password) {
        super(username, password);
    }

    @Override
    public boolean isAdmin() {
        return true;
    }
}