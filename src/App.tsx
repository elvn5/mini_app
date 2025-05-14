import { Route, Routes } from "react-router";
import { ConfigProvider } from 'antd';

import { lightTheme } from './theme/main.ts';
import { ExerciseCategoryScreen, ExercisesScreen, Plan, Settings } from './screens';
import { AppLayout } from './layout/app-layout.tsx';

function App() {

  return (
    <ConfigProvider theme={lightTheme}>
      <Routes>
        <Route element={<AppLayout/>} >
          <Route path={"/"} element={<ExercisesScreen/>} />
          <Route path={"/:id"} element={<ExerciseCategoryScreen/>}/>
          <Route path={"/plan"} element={<Plan/>} />
          <Route path={"/settings"} element={<Settings/>} />
        </Route>
      </Routes>
    </ConfigProvider>
  )
}

export default App
