package finaceSystem;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        FinanceManager financeManager = new FinanceManager();

        // Assuming you have a loop for the user to choose options
        while (true) {
            System.out.println("Choose an option:");
            System.out.println("1. User Login");
            System.out.println("2. Admin Login");
            System.out.println("3. User Signup");
            System.out.println("4. Exit");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (choice) {
                case 1:
                    if (financeManager.userLogin(scanner)) {
                        financeManager.setUserLoggedIn(true);
                        performUserOperations(financeManager, scanner);
                    }
                    break;
                case 2:
                    if (financeManager.adminLogin(scanner)) {
                        financeManager.setAdminLoggedIn(true);
                        performAdminOperations(financeManager, scanner);
                    }
                    break;
                case 3:
                    financeManager.userSignup(scanner);
                    if (financeManager.isUserLoggedIn()) {
                        performUserOperations(financeManager, scanner);
                    }
                    break;
                case 4:
                    System.out.println("Exiting...");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }

    private static void performUserOperations(FinanceManager financeManager, Scanner scanner) {
        while (financeManager.isUserLoggedIn()) {
            System.out.println("User Operations:");
            System.out.println("1. Add Income");
            System.out.println("2. Add Expense");
            System.out.println("3. Add Budget");
            System.out.println("4. Generate Financial Report");
            System.out.println("5. Display Transaction by ID");
            System.out.println("6. Logout");

            int userChoice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (userChoice) {
                case 1:
                    financeManager.addIncome(scanner);
                    break;
                case 2:
                    financeManager.addExpense(scanner);
                    break;
                case 3:
                    financeManager.addBudget(scanner);
                    break;
                case 4:
                    financeManager.generateFinancialReport();
                    break;
                case 5:
                    financeManager.displayTransactionById(scanner);
                    break;
                case 6:
                    financeManager.setUserLoggedIn(false);
                    System.out.println("Logged out successfully.");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }

    private static void performAdminOperations(FinanceManager financeManager, Scanner scanner) {
        while (financeManager.isAdminLoggedIn()) {
            System.out.println("Admin Operations:");
            System.out.println("1. View All Users");
            System.out.println("2. View All Transactions");
            System.out.println("3. Logout");

            int adminChoice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (adminChoice) {
                case 1:
                    financeManager.viewAllUsers();
                    break;
                case 2:
                    financeManager.viewAllTransactions();
                    break;
                case 3:
                    financeManager.setAdminLoggedIn(false);
                    System.out.println("Logged out successfully.");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }
}
