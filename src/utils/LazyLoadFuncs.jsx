import { lazy } from "react";

/**
 * Function to return lazy loaded component with preload function
 *
 * @param {ReactNode} componentToImport
 * @returns ReactNode
 */
export function importWithPreload(componentToImport) {
  const Component = lazy(componentToImport);
  // Set component to preload key
  Component.preload = componentToImport;
  return Component;
}
