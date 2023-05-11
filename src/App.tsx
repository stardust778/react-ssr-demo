import React, { FC, useState } from 'react';
import Button from './components/Button';

type Props = {
  title: string
}

const App: FC<Props> = function(props) {
  const [count, setCount] = useState<number>(0);
  return (
    <h1>
      App { props.title }
      <p>count: { count }</p>
      <Button count={count} setCount={setCount} />
    </h1>
  )
}

export default App;