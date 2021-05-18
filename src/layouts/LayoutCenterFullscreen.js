const LayoutCenterFullscreen = ({ children }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center min-w-100"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(/si2.jpg)',
        backgroundSize: 'cover',
      }}
    >
      {children}
    </div>
  );
};

export default LayoutCenterFullscreen;
