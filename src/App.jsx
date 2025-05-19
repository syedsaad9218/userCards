import Card from "./components/Card";
import React from "react";

const App = () => {

  const users = [
    {
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "123-456-7890"
    },
    {
        "name": "Jane Smith",
        "email": "jane@example.com",
        "phone": "987-654-3210"
    },
    {
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "phone": "555-555-5555"
    },
    {
        "name": "Bob Brown",
        "email": "bob@example.com",
        "phone": "444-444-4444"
    },
    {
        "name": "Charlie Davis",
        "email": "charlie@example.com",
        "phone": "333-333-3333"
    }
];

  return (
    <div className="p-4">
      {users.map((elem, index) => (
        <Card key={index} user={elem.name} email={elem.email} phone={elem.phone} />
      ))}
    </div>
  );
}
export default App;
