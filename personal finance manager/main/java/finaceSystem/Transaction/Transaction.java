package finaceSystem.Transaction;

public class Transaction {
    private int id;
    private double amount;
    private String description;
    private TransactionType type;

    public Transaction(double amount, String description, TransactionType type) {
        this.amount = amount;
        this.description = description;
        this.type = type;
    }

    // Getters and setters

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", amount=" + amount +
                ", description='" + description + '\'' +
                ", type=" + type +
                '}';
    }

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public TransactionType getType() {
		return type;
	}

	public void setType(TransactionType type) {
		this.type = type;
	}

	public Transaction(int id, double amount, String description, TransactionType type) {
		super();
		this.id = id;
		this.amount = amount;
		this.description = description;
		this.type = type;
	}

	public Transaction() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}

