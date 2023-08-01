package finaceSystem;

import java.util.List;
import java.util.Scanner;

import finaceSystem.Budget.Budget;
import finaceSystem.Budget.BudgetDAO;
import finaceSystem.Expense.Expense;
import finaceSystem.Expense.ExpenseDAO;
import finaceSystem.Income.Income;
import finaceSystem.Income.IncomeDAO;
import finaceSystem.Transaction.Transaction;
import finaceSystem.Transaction.TransactionDAO;
import finaceSystem.Transaction.TransactionType;
import finaceSystem.User.User;
import finaceSystem.User.UserAccount;
import finaceSystem.User.UserDAO;

public class FinanceManager {
    private IncomeDAO incomeDAO;
    private ExpenseDAO expenseDAO;
    private TransactionDAO transactionDAO;
    private BudgetDAO budgetDAO;
    private UserDAO userDAO;
    private double currentBalance;
    private boolean userLoggedIn;
    private boolean adminLoggedIn;

    public FinanceManager() {
        incomeDAO = new IncomeDAO();
        expenseDAO = new ExpenseDAO();
        transactionDAO = new TransactionDAO();
        budgetDAO = new BudgetDAO();
        userDAO = new UserDAO();
        currentBalance = calculateCurrentBalance();
        userLoggedIn = false;
        adminLoggedIn = false;
    }

    public boolean userLogin(Scanner scanner) {
        System.out.println("User Login");
        System.out.print("Enter username: ");
        String username = scanner.nextLine();
        System.out.print("Enter password: ");
        String password = scanner.nextLine();

        UserAccount user = userDAO.getUserByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            System.out.println("User login successful.");
            return true;
        } else {
            System.out.println("User login failed. Please try again.");
            return false;
        }
    }

    public boolean adminLogin(Scanner scanner) {
        System.out.println("Admin Login");
        System.out.print("Enter admin username: ");
        String adminUsername = scanner.nextLine();
        System.out.print("Enter admin password: ");
        String adminPassword = scanner.nextLine();
        if (adminUsername.equals("savitha") && adminPassword.equals("savitha123")) {
            System.out.println("Admin login successful.");
            return true;
        } else {
            System.out.println("Admin login failed. Please try again.");
            return false;
        }
    }

    public void userSignup(Scanner scanner) {
        System.out.println("User Signup");
        System.out.print("Enter a new username: ");
        String newUsername = scanner.nextLine();
        UserAccount existingUser = userDAO.getUserByUsername(newUsername);
        if (existingUser != null) {
            System.out.println("Username already exists. Please choose a different username.");
            return;
        }

        System.out.print("Enter a new password: ");
        String newPassword = scanner.nextLine();
        UserAccount newUser = new User(newUsername, newPassword);
        userDAO.addUserAccount(newUser);
        userDAO.addUserToDatabase(newUser);
        System.out.println("User account created successfully.");
        userLoggedIn = true;
        System.out.println("User login successful.");
    }

    public void addIncome(Scanner scanner) {
        if (!userLoggedIn) {
            System.out.println("Please log in as a user to add income.");
            return;
        }

        System.out.print("Enter the amount for the income: ");
        double amount = scanner.nextDouble();
        scanner.nextLine(); 
        System.out.print("Enter a description for the income: ");
        String description = scanner.nextLine();

        Income income = new Income(amount, description);
        incomeDAO.addIncome(income);

        Transaction transaction = new Transaction(amount, description, TransactionType.INCOME);
        transactionDAO.addTransaction(transaction);

        updateCurrentBalance(amount, TransactionType.INCOME);
    }

    public void addExpense(Scanner scanner) {
        if (!userLoggedIn) {
            System.out.println("Please log in as a user to add an expense.");
            return;
        }

        System.out.print("Enter the amount for the expense: ");
        double amount = scanner.nextDouble();
        scanner.nextLine(); // Consume the newline character

        System.out.print("Enter a description for the expense: ");
        String description = scanner.nextLine();

        Expense expense = new Expense(amount, description);
        expenseDAO.addExpense(expense);

        Transaction transaction = new Transaction(amount, description, TransactionType.EXPENSE);
        transactionDAO.addTransaction(transaction);

        updateCurrentBalance(amount, TransactionType.EXPENSE);
    }

    public void addBudget(Scanner scanner) {
        if (!userLoggedIn) {
            System.out.println("Please log in as a user to add a budget.");
            return;
        }

        System.out.print("Enter the budget amount: ");
        double amount = scanner.nextDouble();
        scanner.nextLine(); // Consume the newline character

        System.out.print("Enter a description for the budget: ");
        String description = scanner.nextLine();

        Budget budget = new Budget(amount, description);
        budgetDAO.addBudget(budget);

        System.out.println("Budget added successfully.");
    }

    public void generateFinancialReport() {
        if (!userLoggedIn && !adminLoggedIn) {
            System.out.println("Please log in to generate the financial report.");
            return;
        }

        System.out.println("Financial Report");
        System.out.println("================");
        List<TransactionItem> expenses = expenseDAO.getAllExpenses();
        System.out.println("Expenses:");
        for (TransactionItem expense : expenses) {
            System.out.println(expense);
        }

        List<Income> incomes = incomeDAO.getAllIncomes();
        System.out.println("Incomes:");
        for (Income income : incomes) {
            System.out.println(income);
        }

        List<Transaction> transactionsWithIds = transactionDAO.getAllTransactions();
        System.out.println("Transactions:");
        for (Transaction transaction : transactionsWithIds) {
            System.out.println("ID: " + transaction.getId() + ", " + transaction);
        }

        List<Budget> budgets = budgetDAO.getAllBudgets();
        System.out.println("Budgets:");
        for (Budget budget : budgets) {
            System.out.println(budget);
        }

        double absCurrentBalance = Math.abs(currentBalance);
        String balanceStatus = (currentBalance >= 0) ? "Surplus" : "Deficit";
        System.out.println("Current " + balanceStatus + ": " + absCurrentBalance);
    }

    private double calculateCurrentBalance() {
        double totalIncome = incomeDAO.getTotalIncome();
        double totalExpense = expenseDAO.getTotalExpense();

        return totalIncome - totalExpense;
    }

    private void updateCurrentBalance(double amount, TransactionType type) {
        if (type == TransactionType.INCOME) {
            currentBalance += amount;
        } else if (type == TransactionType.EXPENSE) {
            currentBalance -= amount;
        }
        System.out.println("Current Balance: " + currentBalance);
    }

    public void setUserLoggedIn(boolean loggedIn) {
        userLoggedIn = loggedIn;
    }

    public void setAdminLoggedIn(boolean loggedIn) {
        adminLoggedIn = loggedIn;
    }

    public boolean isUserLoggedIn() {
        return userLoggedIn;
    }

    public boolean isAdminLoggedIn() {
        return adminLoggedIn;
    }

    public void displayTransactionById(Scanner scanner) {
        if (!userLoggedIn && !adminLoggedIn) {
            System.out.println("Please log in to display a transaction by ID.");
            return;
        }

        System.out.print("Enter the transaction ID: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        Transaction transaction = transactionDAO.getTransactionById(id);

        if (transaction != null) {
            System.out.println("Transaction found:");
            System.out.println(transaction);
        } else {
            System.out.println("Transaction with ID " + id + " not found.");
        }
    }

    public void viewAllUsers() {
        if (!adminLoggedIn) {
            System.out.println("Please log in as an admin to view all users.");
            return;
        }
        List<UserAccount> users = userDAO.getAllUsers();
        System.out.println("All Users:");
        for (UserAccount user : users) {
            System.out.println("Username: " + user.getUsername() + ", Admin: " + user.isAdmin());
        }
    }

    public void viewAllTransactions() {
        if (!adminLoggedIn) {
            System.out.println("Please log in as an admin to view all transactions.");
            return;
        }

        // Assuming you have a method in DAO to retrieve all transactions
        List<Transaction> allTransactions = transactionDAO.getAllTransactions();
        System.out.println("All Transactions:");
        for (Transaction transaction : allTransactions) {
            System.out.println(transaction);
        }
    }
}
