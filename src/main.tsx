import React, { type FC } from 'react'
import { createRoot } from 'react-dom/client'

const App: FC = () => <>App</>

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
