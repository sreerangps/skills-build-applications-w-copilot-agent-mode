import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Fetched teams:', results);
        console.log('API endpoint:', apiUrl);
      });
  }, []);

  return (
    <Card>
      <Card.Header as="h2">Teams</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Teams;
