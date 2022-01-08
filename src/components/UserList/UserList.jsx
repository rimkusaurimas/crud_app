import React, { useState } from "react";
import { ListGroup } from "reactstrap";
import { SingleUser } from "./SingleUser/SingleUser";

export const UserList = () => {
  const [users, setUsers] = useState([
    {
      name: "Aurimas",
      lastName: "Rimkus",
      address: "Kauno g. 1",
      country: "Lietuva",
      email: "labas@aurimasrimkus.lt",
    },
    {
      name: "Linas",
      lastName: "Jonas",
      address: "Vilniaus g. 1",
      country: "Lietuva",
      email: "labas@linai.lt",
    },
  ]);
  return (
    <ListGroup>
      {users.map((user) => (
        <SingleUser
          name={user.name}
          lastName={user.lastName}
          address={user.address}
          country={user.country}
          email={user.email}
        />
      ))}
    </ListGroup>
  );
};