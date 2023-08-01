package finaceSystem.Income;

public class Income {
    private int id;
    private double amount;
    private String description;

    public Income(double amount, String description) {
        this.amount = amount;
        this.description = description;
    }

    // Getters and setters

    @Override
    public String toString() {
        return "Income{" +
                "id=" + id +
                ", amount=" + amount +
                ", description='" + description + '\'' +
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

	public Income(int id, double amount, String description) {
		super();
		this.id = id;
		this.amount = amount;
		this.description = description;
	}

	public Income() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}
