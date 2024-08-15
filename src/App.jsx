import { useEffect, useState } from "react";

import TransactionList from "./components/TransactionList";
import AddForm from "./components/AddForm";
import SearchForm from "./components/SearchForm";

import "./App.css";

function App() {
  const [transactionListData, setTransactionListData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://json-server-vercel-three-pearl.vercel.app/transactions")
      .then((response) => response.json())
      .then((data) => setTransactionListData(data));
  }, []);

  function addTransaction(transaction) {
    const lastId = transactionListData[transactionListData.length - 1].id;
    const nextId = lastId + 1;

    setTransactionListData([
      ...transactionListData,
      { ...transaction, id: nextId },
    ]);
  }

  const filteredListData = transactionListData.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchText)
  );

  function handleSearch(text) {
    setSearchText(text);
  }

  return (
    <main>
      <TransactionList list={filteredListData} />
      <AddForm onAdd={addTransaction} />
      <SearchForm onSearch={handleSearch} />
    </main>
  );
}

export default App;
