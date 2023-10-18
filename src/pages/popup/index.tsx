import { createRoot } from 'react-dom/client'
import React from 'react'
import {
  RouterProvider,
} from "react-router-dom";
import '@pages/popup/index.css'
import refreshOnUpdate from 'virtual:reload-on-update-in-view'
import { attachTwindStyle } from '@src/shared/style/twind'
import { router } from './routes/router';

refreshOnUpdate('pages/popup')

function init() {
  const appContainer = document.querySelector('#app-container')
  if (!appContainer) {
    throw new Error('Can not find #app-container')
  }
  attachTwindStyle(appContainer, document)
  const root = createRoot(appContainer)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

init()
