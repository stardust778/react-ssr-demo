import React, { FC } from 'react';

type Props = {
  setCount: Function;
  count: number;
}

const Button: FC<Props> = function(props) {
  const { count, setCount } = props;
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count+1</button>
    </div>
  )
}

export default Button;