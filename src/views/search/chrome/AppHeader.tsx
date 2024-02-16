import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";
import { useConfigContext } from "../../../contexts/ConfigurationContext";
import {
  VuiFlexContainer,
  VuiFlexItem,
  VuiTitle,
  VuiTextColor,
  VuiButtonTertiary,
  VuiText,
  VuiButtonPrimary, VuiModal,
} from "../../../ui";

import "./appHeader.scss";


interface Props {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const AppHeader = ({ isModalOpen, setIsModalOpen }: Props) => {
  const { app, appHeader } = useConfigContext();
  const location = useLocation();
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied!'))
        .catch(err => console.error('Failed to copy: ', err));
  };


  const { isAuthEnabled, logOut, user } = useAuthenticationContext();
 const onClose = () => setIsModalOpen(false);
  return (
    <div className="appHeader">
      <VuiFlexContainer justifyContent="spaceBetween" alignItems="center">
        <VuiFlexItem grow={1}>
          <VuiFlexContainer alignItems="center" wrap={true} spacing="xxs">
            <VuiFlexItem>
              {/* We want this disabled so we can track outbound links. Enabling
          this would add the rel="noopener noreferrer" attribute to the
          link. */}
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a
                href={appHeader.logo.link ?? "https://vectara.com/"}
                target="_blank"
                className="appHeaderLogo"
              >
                <img
                  src={appHeader.logo.src ?? "images/vectara_logo.png"}
                  alt={appHeader.logo.alt ?? "Vectara logo"}
                  height={appHeader.logo.height ?? "20"}
                  style={{ marginTop: "1px" }}
                />
              </a>
            </VuiFlexItem>

            <VuiFlexItem grow={1}>
              <VuiTitle size="xs" align="left">
                <VuiTextColor color="subdued">
                  <h1>{app.title ?? "Sample app"}</h1>
                </VuiTextColor>
              </VuiTitle>
            </VuiFlexItem>
          </VuiFlexContainer>
        </VuiFlexItem>

        <VuiFlexItem grow={false}>
          <VuiFlexContainer justifyContent="spaceBetween" alignItems="center">
            {isAuthEnabled && (
              <>
                <VuiFlexItem grow={false}>
                  <VuiText size="s">
                    <p>Logged in as {user?.email}</p>
                  </VuiText>
                </VuiFlexItem>
                <VuiFlexItem>
                  <VuiButtonTertiary color="neutral" size="m" onClick={logOut}>
                    Log out
                  </VuiButtonTertiary>
                </VuiFlexItem>
              </>
            )}

            { (
              <VuiFlexItem>
                <VuiButtonTertiary
                  color="primary"
                  size="m"
                  href={"https://sci-hub.bot"}
                  target="_blank"
                  onClick={() => {
                    ReactGA.event({
                      category: "Outbound link",
                      action: "click",
                      label: "Learn more",
                    });
                  }}
                >
                  {appHeader.learnMore.text ?? "Chat with another DOI"}
                </VuiButtonTertiary>
              </VuiFlexItem>
            )}

            <VuiFlexItem>
              <VuiButtonPrimary
                color="primary"
                size="m"
                href={location.pathname}
                target="_blank"
                onClick={(e) => {
                  e.preventDefault();
                    setIsModalOpen(true);
                  ReactGA.event({
                    category: "Outbound link",
                    action: "click",
                    label: "Share",
                  });

                }}
              >
                Share
              </VuiButtonPrimary>
              <VuiModal color="primary" title={"Share this Search and Summary"} isOpen={isModalOpen} onClose={onClose}>
                <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
                  <div className="flex flex-col items-start space-y-4">
                    <p className="text-sm text-gray-600">Copy this link:</p>
                    <div className="w-full rounded-md border p-3 bg-gray-50">
                      <a className="break-all text-blue-600 hover:text-blue-800 visited:text-purple-600" href="#" onClick={copyToClipboard}>
                        {window.location.href}
                      </a>
                    </div>
                    <div className="flex space-x-2">
                      <VuiButtonPrimary onClick={copyToClipboard} color="primary"
                                        size="m">Copy Link</VuiButtonPrimary>
                      <VuiButtonPrimary onClick={onClose} color="neutral" size="m">Close</VuiButtonPrimary>
                    </div>
                  </div>
                </div>
              </VuiModal>
            </VuiFlexItem>
          </VuiFlexContainer>
        </VuiFlexItem>
      </VuiFlexContainer>
    </div>
  );
};
