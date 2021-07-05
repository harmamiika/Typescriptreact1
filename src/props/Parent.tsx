import { Child } from './Child';

const Parent = () => {
  return <Child color="red" onClick={() => console.log('clikd')} />;
};

export default Parent;
