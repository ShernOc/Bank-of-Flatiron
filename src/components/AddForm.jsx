function AddForm({ onAdd }) {
  function addTransaction(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const transaction = (() => {
      const data = {};
      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }
      return data;
    })();

    onAdd(transaction);
  }

  return (
    <form onSubmit={addTransaction}>
      <div>
        <label>
          Date:
          <input type="date" name="date" required />
        </label>
      </div>

      <div>
        <label>
          Description:
          <input type="text" name="description" required />
        </label>
      </div>

      <div>
        <label>
          Category:
          <input type="text" name="category" required />
        </label>
      </div>

      <div>
        <label>
          Amount:
          <input type="number" name="amount" required />
        </label>
      </div>

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddForm;
