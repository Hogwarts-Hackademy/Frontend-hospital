import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '01 July', uv: 100 },
  { name: '05 July', uv: 200 },
  { name: '10 July', uv: 300 },
  { name: '15 July', uv: 400 },
  { name: '20 July', uv: 500 },
  { name: '25 July', uv: 700 },
  { name: '29 July', uv: 1287 },
];

const GraphCard = () => {
  return (
    <div style={{
      width: '548px',
      height: '400px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <h3 style={{ color: '#000', marginBottom: '10px' }}>Patient Admission</h3>
      <div style={{
        width: '100%',
        height: '75%',
      }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#000',
        }}>1,287</span>
        <div style={{
          padding: '5px 10px',
          borderRadius: '5px',
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
          color: '#4CAF50',
          fontWeight: 'bold',
        }}>
          +3.4%
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
