import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Fetched activities:', results);
        console.log('API endpoint:', apiUrl);
      });
  }, []);

  return (
    <Card>
      <Card.Header as="h2">Activities</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.user}</td>
                <td>{a.type}</td>
                <td>{a.duration}</td>
                <td>{a.calories}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Activities;
