import { RecoilRoot } from 'recoil';
import Routes from './Routes';
import { ClerkProvider } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';
function App() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }

  const queryClient = new QueryClient;
  return (
    <RecoilRoot>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </ClerkProvider>
    </RecoilRoot>

  )
}

export default App
