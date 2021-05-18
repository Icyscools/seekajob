import NavTab from '../components/NavTab';

const LayoutWithNavTab = ({ children }) => {
  return (
    <div>
      <NavTab />
      {children}
    </div>
  );
};

export default LayoutWithNavTab;
