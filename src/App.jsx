import { RecoilRoot } from 'recoil';
import Routes from './Routes';
import { ClerkProvider } from '@clerk/clerk-react'

// Imported Routes component from Routes.jsx
function App() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }
  return (
    <RecoilRoot>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Routes />
      </ClerkProvider>
    </RecoilRoot>

  )
}

export default App
