import React, { useEffect, useMemo, useState} from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { initializeParse } from '@parse/react';
import ReactGA from "react-ga4";
import Analytics from "analytics";
import googleTagManager from "@analytics/google-tag-manager";
import { SearchView } from "./views/search/SearchView";
import { LoggedOutView } from "./views/loggedOut/LoggedOutView";
import { useConfigContext } from "./contexts/ConfigurationContext";
import { SearchContextProvider } from "./contexts/SearchContext";
import {
  AuthenticationContextProvider,
  useAuthenticationContext,
} from "./contexts/AuthenticationContext";
import { ConfigContextProvider } from "./contexts/ConfigurationContext";
import * as FullStory from "@fullstory/browser";
import "./App.scss";
initializeParse(
    'https://parsecowrite.reminis.app/parse',
    'M7U3MemtabhLjEe4yYOCz15uEIoFWeD98uCklwSs',
    'fp5JxYm4d8tTQ9jjxZ4RXTmsWSKl2birahdPEgIy'
);
function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

type Props = {
  setMemid: React.Dispatch<React.SetStateAction<string>>;
};
type Props2 = {
  memid: string;
};
function QueryParamsDemo({setMemid}: Props) {
  const query = useQuery();
  useEffect(() => {

    const memid = query.get("memid")
    setMemid(memid ?? ""); // memid hardcoded for now
    console.log("start");
    console.log(query.get("memid")); // <-- log
    console.log("end");
  }, [query,setMemid]);
  return (
      <></>
  );
}


const AppRoutes = ({memid}: Props2) => {


  const { isConfigLoaded, missingConfigProps, app, analytics } =
    useConfigContext();

  const { isAuthEnabled, isAuthenticated, logIn } = useAuthenticationContext();

  useEffect(() => {
    if (isAuthEnabled) {
      const authToken = localStorage.getItem("AuthToken");
      logIn(authToken);
    }

    if (analytics.googleAnalyticsTrackingCode) {
      ReactGA.initialize(analytics.googleAnalyticsTrackingCode);
    }

    if (analytics.gtmContainerId) {
      Analytics({
        plugins: [
          googleTagManager({
            containerId: analytics.gtmContainerId,
          }),
        ],
      });
    }

    if (analytics.fullStoryOrgId) {
      FullStory.init({
        orgId: analytics.fullStoryOrgId,
        devMode: process.env.NODE_ENV !== "production",
      });
    }

    if (app.title) document.title = app.title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfigLoaded]);

  if (missingConfigProps.length) {
    return (
      <div>
        These environment variables are missing: {missingConfigProps.join(", ")}
        . They need to be defined for the app to function.
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoggedOutView />;
  }

  return (
     <>
      <SearchContextProvider memid={memid}>
        <SearchView />
      </SearchContextProvider></>

  );
};

export const App =  function App() {
  const [memid, setMemid] = useState(""); // memid hardcoded for now



  return (
      <Router>
        <QueryParamsDemo setMemid={setMemid}/>
      <ConfigContextProvider memid={memid}>
        <AuthenticationContextProvider>
          <AppRoutes memid={memid} />
        </AuthenticationContextProvider>
      </ConfigContextProvider>
      </Router>
  );
}
