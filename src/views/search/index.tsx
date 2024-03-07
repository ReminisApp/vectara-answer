import React, { useEffect } from "react";
import { initializeParse } from '@parse/react';
import ReactGA from "react-ga4";
import Analytics from "analytics";
import googleTagManager from "@analytics/google-tag-manager";
import { SearchView } from "./SearchView";
import { LoggedOutView } from "../loggedOut/LoggedOutView";
import { useConfigContext } from "../../contexts/ConfigurationContext";
import {
    useAuthenticationContext,
} from "../../contexts/AuthenticationContext";
import * as FullStory from "@fullstory/browser";
import { SearchContextProvider } from "../../contexts/SearchContext";

initializeParse(
    'https://parsecowrite.reminis.app/parse',
    'M7U3MemtabhLjEe4yYOCz15uEIoFWeD98uCklwSs',
    'fp5JxYm4d8tTQ9jjxZ4RXTmsWSKl2birahdPEgIy'
);

const AppRoutes = ({memid}: {memid: string}) => {


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
            </SearchContextProvider>
        </>

    );
};

const Search = () => {
    const { memid } =
        useConfigContext();

    return (
        <AppRoutes memid={memid}/>
    );
}

export default Search