import { twind, cssom, observe } from '@twind/core'
import 'construct-style-sheets-polyfill'
import config from '@root/twind.config'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export function attachTwindStyle<T extends { adoptedStyleSheets: any }>(
  observedElement: Element,
  documentOrShadowRoot: T
) {
  const sheet = cssom(new CSSStyleSheet())
  const tw = twind(config, sheet)
  observe(tw, observedElement)
  documentOrShadowRoot.adoptedStyleSheets = [sheet.target]
}
