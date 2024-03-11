import { useConfigContext } from "../../contexts/ConfigurationContext";
import {
  VuiFlexContainer,
  VuiFlexItem,
  VuiButtonTertiary,
} from "../../ui";
import { IoLogIn } from "react-icons/io5";

import "./appHeader.scss";
import { NavLink, useNavigate } from "react-router-dom";


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
    <div className="headerWrapper">
      <div className="appHeader">
        <VuiFlexContainer justifyContent="spaceBetween" alignItems="center">
          <VuiFlexItem grow={1}>
            <VuiFlexContainer alignItems="center" wrap={true} spacing="xs">
              <VuiFlexItem className="logoWrapper">
                {/* We want this disabled so we can track outbound links. Enabling
                    this would add the rel="noopener noreferrer" attribute to the link. 
                */}
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a
                  href={appHeader.logo.link ?? "https://vectara.com/"}
                  target="_blank"
                  className="appHeaderLogo"
                >
                  <img
                    src={"https://d9hhrg4mnvzow.cloudfront.net/www.keymate.ai/508f63e3-transparent_10bf03j0be03j000000000.png"}
                    alt={appHeader.logo.alt ?? "Vectara logo"}
                    height={40}
                    width={140}
                    style={{ marginTop: "1px" }}
                  />
                </a>
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

          <VuiFlexItem grow={1} className="navItemContainer">
            <VuiFlexContainer spacing="m" justifyContent="center">
              <VuiFlexItem>
                <NavLink
                  color="primary"
                  to="/"
                  className={({isActive}) => isActive ? "navItem active" : "navItem"}
                >
                  {"Search"}
                </NavLink>
              </VuiFlexItem>
              <VuiFlexItem >
                <NavLink
                  to="/memory"
                  color="primary"
                  className={({isActive}) => isActive ? "navItem active" : "navItem"}
                >
                  {"Memory"}
                </NavLink>
              </VuiFlexItem>
            </VuiFlexContainer>
          </VuiFlexItem>


          <VuiFlexItem grow={1}>
            <VuiFlexContainer alignItems="center" justifyContent="end" wrap={true} spacing="xs">
              <VuiFlexItem>
                <VuiButtonTertiary
                  color="primary"
                  size="m"
                  onClick={() => {
                    navigate("/")
                  }}
                  className="loginButton"
                >
                  {"Sign In"}&nbsp;<IoLogIn size={"24px"} />
                </VuiButtonTertiary>
              </VuiFlexItem>
            </VuiFlexContainer>
          </VuiFlexItem>
        </VuiFlexContainer>
      </div>
    </div>
  );
};
