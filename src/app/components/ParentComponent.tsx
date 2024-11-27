'use client';

import { useState } from 'react';
import { initialStudents } from '../components/state';
import Child from './ChildComponent';

export default function Parent() {
  const [students] = useState(initialStudents);

  return (
    <main className="min-h-screen bg-gray-100" style={styles.mainContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>Student Directory</h1>
        <div style={styles.grid}>
          {students.map((student, index) => (
            <Child key={index} student={student} />
          ))}
        </div>
      </div>
    </main>
  );
}

const styles = {
  mainContainer: {
    backgroundColor: '#f5f5f5',  // light grey
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    padding: '2rem',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#2d3748',  // dark grey
    fontFamily: 'inherit',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    padding: '1rem',
  }
} as const;