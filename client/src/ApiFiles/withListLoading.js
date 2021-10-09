import React from 'react';

// called from App.js component = getRxcuiInfo
// calls getRxcuiInfo
function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, fetching data may take some time:
      </p>
    );
  };
}

export default WithListLoading;
