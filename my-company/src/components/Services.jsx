function Services() {
    return (
      <div style={{ 
        padding: '20px',
        backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      maxWidth: '800px',
      margin: '0 auto'
        }}>
        <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '15px' }}>Our Services</h1>
        <ul style={{
          listStyleType: 'none',
          padding: '0',
          margin: '0',
          fontSize: '1.1rem',
          color: '#666'
          }} >
          <li style={{ marginBottom: '10px' }}>Technology Consulting</li>
          <li style={{ marginBottom: '10px' }}>Market Analysis</li>
          <li style={{ marginBottom: '10px' }}>Product Development</li>
        </ul>
      </div>
    );
  }

  export default Services;