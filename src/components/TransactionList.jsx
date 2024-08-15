import React from "react";

function TransactionList({ list }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ id, date, description, category, amount }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr colSpan="5">
          <th>{list.length < 1 && "No results found"}</th>
        </tr>
      </tfoot>
    </table>
  );
}

export default TransactionList;
