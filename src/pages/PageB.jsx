import { useSelector, useDispatch } from 'react-redux';
import { incremented, decremented } from '../redux/counter';

import reactLogo from '~/assets/react.svg'
import viteLogo from '/vite.svg'

import CounterBtn from '~/components/CountBtn';

const PageB = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
      <div>
        <h3>
          { process.env.NODE_ENV !== 'production' && 'development' }
          { process.env.NODE_ENV === 'production' && 'production' }
        </h3>
        <h1>Vite + React</h1>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div>
        <CounterBtn
          text="ReduxCounterBtn1"
          count={count}
          incremented={() => dispatch(incremented())}
          decremented={() => dispatch(decremented())}
        />
      </div>
    </div>
  );
};

export default PageB;