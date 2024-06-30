import { useSelector, useDispatch } from 'react-redux';
import { incremented, decremented } from '../redux/counter';

import CounterBtn from '~/components/CountBtn';

const PageB = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <CounterBtn
          text="ReduxCounterBtn2"
          count={count}
          incremented={() => dispatch(incremented())}
          decremented={() => dispatch(decremented())}
        />
      </div>
    </div>
  );
};

export default PageB;