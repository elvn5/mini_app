import { Route, Routes } from "react-router";
import { ConfigProvider } from 'antd';

import { lightTheme } from './theme/main.ts';
import { HomeScreen } from "./screens";
import { AppLayout } from './layout/app-layout.tsx';

function App() {

  return (
    <ConfigProvider theme={lightTheme}>
      <Routes>
        <Route element={<AppLayout/>} >
          <Route path={"/"} index element={<HomeScreen/>} />
        </Route>
      </Routes>
    </ConfigProvider>
  )
}

export default App
