import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import { Suspense, lazy } from "react"
import "./index.css";
import { DataProvider } from "./data"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index Component={lazy(() => import("./pages/Home"))} />
      <Route path="members/" Component={lazy(() => import("./pages/MemberRoot"))}>
        <Route index Component={lazy(() => import("./pages/MemberList"))} />
        <Route path=":member/">
          <Route index Component={lazy(() => import("./pages/Member"))} />
          <Route path="info" Component={lazy(() => import("./pages/MemberInfo"))} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <DataProvider>
          <RouterProvider router={router}></RouterProvider>
        </DataProvider>
      </Suspense>
    </>
  )
}

export default App
