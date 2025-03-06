// Updated authStyles object with fixed input styling
export const authStyles = {
  pageContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    direction: 'rtl', // RTL support for Persian
    padding: '2rem'
  },
  cardContainer: {
    width: '100%',
    maxWidth: '400px'
  },
  card: {
    width: '100%',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    border: 'none',
    backgroundColor: '#ffffff' // Explicitly set white background
  },
  cardContent: {
    padding: '2rem'
  },
  button: {
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    fontSize: '1rem',
    padding: '0.75rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(102, 126, 234, 0.25)',
    fontWeight: '500',
    display: 'block',
    margin: '0 auto',
    width: '100%',
    maxWidth: '250px'
  },
  input: {
    borderRadius: '8px',
    padding: '0.75rem 1rem',
    border: '1px solid #e2e8f0',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    backgroundColor: '#f8fafc',
    width: '100%',
    boxSizing: 'border-box',
    display: 'block'
  },
  title: {
    color: '#2d3748',
    fontWeight: '600',
    fontSize: '1.75rem',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#718096',
    marginBottom: '1.5rem',
    fontSize: '1rem'
  },
  link: {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s ease'
  },
  formGroup: {
    marginBottom: '1.25rem',
    textAlign: 'right',
    width: '100%'
  },
  formLabel: {
    fontWeight: '500',
    marginBottom: '0.5rem',
    color: '#4a5568',
    display: 'block'
  },
  checkboxContainer: {
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
    width: '100%'
  },
  forgotPassword: {
    color: '#667eea',
    fontSize: '0.875rem',
    textAlign: 'center',
    display: 'block'
  },
  registerText: {
    textAlign: 'center',
    marginTop: '1.5rem',
    color: '#718096'
  }
};