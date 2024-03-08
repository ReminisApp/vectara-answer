import { useConfigContext } from "../../contexts/ConfigurationContext";
import {
  VuiFlexContainer,
  VuiFlexItem,
  VuiButtonTertiary,
} from "../../ui";

import "./appHeader.scss";
import { useNavigate } from "react-router-dom";


interface Props {
  isModalOpen: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const AppHeader = ({ isModalOpen, setIsModalOpen }: Props) => {
  const { appHeader } = useConfigContext();
  const navigate = useNavigate();
/*   const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('Link copied!'))
      .catch(err => console.error('Failed to copy: ', err));
  }; */


  /* const { isAuthEnabled, logOut, user } = useAuthenticationContext();
  const onClose = () => setIsModalOpen(false); */
  return (
    <div className="appHeader">
      <VuiFlexContainer justifyContent="spaceBetween" alignItems="center">
        <VuiFlexItem grow={1}>
          <VuiFlexContainer alignItems="center" wrap={true} spacing="xs">
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
                  width={100}
                  style={{ marginTop: "1px" }}
                />
              </a>
            </VuiFlexItem>

            <VuiFlexItem>
              <VuiButtonTertiary
                color="primary"
                size="m"
                onClick={() => {
                  navigate("/")
                }}
                className="navItem"
              >
                {"Search"}
              </VuiButtonTertiary>
            </VuiFlexItem>
            <VuiFlexItem >
              <VuiButtonTertiary
                color="primary"
                size="m"
                onClick={() => {
                  navigate("/memory")
                }}
                className="navItem"
              >
                {"Memory"}
              </VuiButtonTertiary>
            </VuiFlexItem>
            {/*  <VuiFlexItem >
              <VuiButtonTertiary
                color="primary"
                size="m"
                onClick={() => {
                  console.log("first")
                }}
              >
                {"Bookmark"}
              </VuiButtonTertiary>
            </VuiFlexItem> */}
          </VuiFlexContainer>
        </VuiFlexItem>
      </VuiFlexContainer>
    </div>
  );
};
