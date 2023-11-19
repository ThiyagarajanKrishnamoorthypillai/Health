import React, { useState, useEffect } from 'react';

const Health = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/items');
          const data = await response.json();
          setItems(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h2>Items from MongoDB</h2>
        <ul>
          {items.map((item) => (
            <li key={item.username}>
              <strong>{item.username}</strong>: {item.password}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Health