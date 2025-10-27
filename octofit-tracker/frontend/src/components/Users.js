import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Fetched users:', results);
        console.log('API endpoint:', apiUrl);
      });
  }, []);

  return (
    <Card>
      <Card.Header as="h2">Users</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.team}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Users;
