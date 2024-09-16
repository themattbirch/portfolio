import React, { useEffect } from 'react';

const LogTestComponent = () => {
  useEffect(() => {
    console.log('React loaded successfully:', React.version);
  }, []);

  return <div>Check console for logs.</div>;
};

export default LogTestComponent;