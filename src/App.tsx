import { useState } from 'react';

import ForwardCounter from './components/ForwardCounter';
import BackwardCounter from './components/BackwardCounter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ForwardCounter />
      <BackwardCounter />
    </>
  );
}

export default App;
