const LoadingScreen = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Checking authentication...</p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  spinner: {
    width: '60px',
    height: '60px',
    border: '6px solid #d1d5db',
    borderTop: '6px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '20px',
    fontSize: '1.1rem',
    color: '#374151',
  },
};

export default LoadingScreen;
