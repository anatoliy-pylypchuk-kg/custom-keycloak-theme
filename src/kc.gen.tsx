// This file is auto-generated by the `update-kc-gen` command. Do not edit it manually.
// Hash: 50c90ef4f963a48105c3c4c52ec0ab52c7320101af7436df533e3df635598812

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { lazy, Suspense, type ReactNode } from "react";

export type ThemeName = "custom-keycloak-theme";

export const themeNames: ThemeName[] = ["custom-keycloak-theme"];

export type KcEnvName = never;

export const kcEnvNames: KcEnvName[] = [];

export const kcEnvDefaults: Record<KcEnvName, string> = {};

/**
 * NOTE: Do not import this type except maybe in your entrypoint.
 * If you need to import the KcContext import it either from src/login/KcContext.ts or src/account/KcContext.ts.
 * Depending on the theme type you are working on.
 */
export type KcContext = import("./login/KcContext").KcContext;

declare global {
  interface Window {
    kcContext?: KcContext;
  }
}

export const KcLoginPage = lazy(() => import("./login/KcPage"));

export function KcPage(props: { kcContext: KcContext; fallback?: ReactNode }) {
  const { kcContext, fallback } = props;
  return (
    <Suspense fallback={fallback}>
      {(() => {
        switch (kcContext.themeType) {
          case "login":
            return <KcLoginPage kcContext={kcContext} />;
        }
      })()}
    </Suspense>
  );
}
