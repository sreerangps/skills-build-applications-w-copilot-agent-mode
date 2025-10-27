import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Fetched workouts:', results);
        console.log('API endpoint:', apiUrl);
      });
  }, []);

  return (
    <Card>
      <Card.Header as="h2">Workouts</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((w) => (
              <tr key={w.id}>
                <td>{w.id}</td>
                <td>{w.name}</td>
                <td>{w.description}</td>
                <td>{w.duration}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Workouts;
