import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { App } from "./App"
import { store } from "./app/store"
import './index.css'
import { HeroUIProvider } from "@heroui/react"
import { ThemeProvider } from "./components/theme-provider"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Auth } from "./pages/auth"
import { Landing } from "./pages/landing"
import { Layout } from "./components/layout"
import { Home } from "./pages/home"
import { Portfolio } from "./pages/portfolio"
import { Market } from "./pages/market"
import { Trending } from "./pages/trending"
import { CurrentCoin } from "./pages/current-coin"
import { AuthGuard } from "./features/auth-guard"

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'market',
        element: <Market />
      },
      {
        path: 'trending',
        element: <Trending />
      },
      {
        path: 'current-coin/:id',
        element: <CurrentCoin />
      },
    ]
  }
])

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Provider store={store}>
        <HeroUIProvider>
          <ThemeProvider>
            <AuthGuard>
              <RouterProvider router={ router } />
            </AuthGuard>
          </ThemeProvider>
        </HeroUIProvider>
      </Provider>
    </StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
