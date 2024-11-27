interface Student {
    Name: string;
    Age: number;
    Class: number;
    Student: string;
    FavouriteDish: string;
    FavouriteColor: string;
    FavouriteSport: string;
  }

  const Child = ({ student }: { student: Student }) => {
    return (
      <div style={styles.card}>
        <p style={styles.row}><span style={styles.label}>Name:</span> {student.Name}</p>
        <p style={styles.row}><span style={styles.label}>Age:</span> {student.Age}</p>
        <p style={styles.row}><span style={styles.label}>Class:</span> {student.Class}</p>
        <p style={styles.row}><span style={styles.label}>Student:</span> {student.Student}</p>
        <p style={styles.row}><span style={styles.label}>Favourite Dish:</span> {student.FavouriteDish}</p>
        <p style={styles.row}><span style={styles.label}>Favourite Color:</span> {student.FavouriteColor}</p>
        <p style={styles.row}><span style={styles.label}>Favourite Sport:</span> {student.FavouriteSport}</p>
      </div>
    );
  };

  const styles = {
    card: {
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease',
      ':hover': {
        transform: 'translateY(-2px)',
      }
    },
    row: {
      marginBottom: '0.5rem',
      fontSize: '1rem',
      lineHeight: '1.5',
      color: '#4a5568',
    },
    label: {
      fontWeight: 'bold',
      color: '#2d3748',
      marginRight: '0.5rem',
    }
  } as const;

  export default Child;