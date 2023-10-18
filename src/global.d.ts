import Chrome from 'chrome'
/// <reference types="vite-plugin-svgr/client" />

declare namespace chrome {
  export default Chrome
}

declare module 'virtual:reload-on-update-in-background-script' {
  export const reloadOnUpdate: (watchPath: string) => void
  export default reloadOnUpdate
}

declare module 'virtual:reload-on-update-in-view' {
  const refreshOnUpdate: (watchPath: string) => void
  export default refreshOnUpdate
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.json' {
  const content: string
  export default content
}
