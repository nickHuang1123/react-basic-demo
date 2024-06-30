## React Basic Demo

* 了解 React useState、useEffect
  - JSX 會透過 React.createElement() 將內容 html 轉譯成 react 格式
    - JSX
    ```const element = <h1>你好，世界！</h1>;```
    - JS
    ```const element = React.createElement('h1', null, '你好，世界！');```
    - 常用 hooks
        * useState - 資料狀態
        ```const [count, setCount] = useState(0);```
        * useMemo - 重新定義資料，並且只在變動時才重新定義，類似 Vue 的 computed
        ```const dataLength = useMemo(() => data.length, [data]);```
        * useEffect
        ```
        <!-- 持續監聽變動執行 -->
        useEffect(() => {
            console.log(count);
        }, [count]);
        ```
        ```
        <!-- 只會執行一次 -->
        useEffect(() => {
            console.log(count);
        });
        ```
        ```
        <!-- 註銷執行 -->
        useEffect(() => {
            return () => {
                console.log('component will unmount');
            };
        });
        ```
        * useCallback - 針對複用函數至子元件時，可以避免重複創建函數 
        ```
        const memoizedCallback = useCallback(() => {
            console.log(count);
        }, [count]);
        ```
* 了解 react-router
  1. react-router 是 React 生態系統中用於路由管理的核心庫。它提供了一套完整的路由解決方案，適用於各種 React 應用，包括 Web 應用和 React Native 應用。react-router 的核心思想是將路由信息與 UI 組件解耦，以實現組件化和可複用性。

    - 特點和主要組件：
      * Router: 路由器組件，用於包裹整個應用，管理應用的路由狀態。
      * Route: 路由定義組件，用於在特定路徑下渲染對應的組件。
      * Link 和 NavLink: 跳轉鏈接組件，用於在應用中導航到不同的路徑。
      * Switch: 用於渲染與當前路徑匹配的第一個 Route 或 Redirect。
  2. react-router-dom
  react-router-dom 是建立在 react-router 基礎之上的庫，專門用於 Web 應用中。它包含了 react-router 中的核心功能，並提供了額外的組件和功能來支持瀏覽器環境下的開發。

    - 常用組件：
      * BrowserRouter: 使用 HTML5 history API 來保持 UI 和 URL 的同步。
      * HashRouter: 使用 URL 的 hash 部分（#）來保持 UI 和 URL 的同步，適合在不支持 HTML5 history API 的環境中使用。
      * Link 和 NavLink: 用於創建導航鏈接的組件，NavLink 具有額外的樣式和功能。
      * Route: 渲染路徑匹配的 UI 組件。
      * Switch: 渲染與當前路徑匹配的第一個 Route 或 Redirect。

    - 主要變化：
      * Switch: 用於渲染與當前路徑匹配的第一個 Route 或 Redirect。
      * Route: 用於定義路徑和對應的組件。
      * Link 和 NavLink: 用於創建導航鏈接，NavLink 具有額外的樣式和功能。
      * Routes: 替代了 Switch，用於包裹多個 Route 組件。
      * Route: 簡化了路由配置，使用更直觀的方式定義路徑和對應的組件。
      * Link 和 NavLink: 用於創建導航鏈接，NavLink 具有額外的樣式和功能。
      * useNavigate: 新的導航鉤子，用於在組件內部執行編程式導航。
      * Outlet: 用於在父路由組件中渲染子路由。

* 了解 Redux
  1. 使用 **@reduxjs/toolkit** 中的 createSlice 來建立 Redux 狀態管理器
    ```
    import { createSlice } from '@reduxjs/toolkit'

    const counterSlice = createSlice({
      name: 'counter',
      initialState: {
        value: 0
      },
      reducers: {
        incremented: state => {
          state.value += 1
        },
        decremented: state => {
          if (state.value > 0) {
            state.value -= 1
          }
        }
      }
    })

    export const { incremented, decremented } = counterSlice.actions

    export default counterSlice.reducer
    ```
  2. 使用 **@reduxjs/toolkit** 中的 configureStore 來註冊新增好的 redux 進入狀態管理層
    ```
    import { configureStore } from '@reduxjs/toolkit'

    import counterSlice from './counter';

    const store = configureStore({
      reducer: {
        counter: counterSlice
      }
    })

    export default store
    ```

    3. 使用 **react-redux** 中的 useSelector 來獲取狀態管理層中的狀態，及修改狀態的 action
    ```
    import { useSelector, useDispatch } from 'react-redux';
    import { incremented, decremented } from '../redux/counter';

    // useSelector 用於獲取狀態管理層中的狀態
    const count = useSelector((state) => state.counter.value);
    // useDispatch 用於獲取狀態管理層中的 dispatch
    const dispatch = useDispatch();

    // dispatch 用於執行狀態管理層中的 action
    dispatch(incremented()) // +1
    dispatch(decremented()) // -1
    ```