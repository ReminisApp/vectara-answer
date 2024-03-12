import {
  VuiFlexContainer,
  VuiFlexItem,
  VuiTitle,
  VuiText,
  VuiLink,
  VuiSpacer,
  VuiButtonPrimary,
} from "../../ui";
import "./appFooter.scss";

export const AppFooter = () => {
  return (
    <div className="appFooter">
      <div className="appFooterContent">
        <VuiFlexContainer
          alignItems="start"
          spacing="l"
          className="appFooterContent__layout"
        >
          <VuiFlexItem grow={5}>
            <VuiTitle size="s">
              <h3>Just an example of what's possible</h3>
            </VuiTitle>

            <VuiSpacer size="m" />

            <VuiText>
              <p>
                Keymate.AI allows you to build research bases like this and ground AI responses on ChatGPT based on the search and summary results shown here.
              </p>
            </VuiText>

            <VuiSpacer size="m" />

            <div>
              <VuiButtonPrimary
                color="primary"
                size="m"
                href="https://help.keymate.ai"
                target="_blank"
              >
                Learn More About Keymate
              </VuiButtonPrimary>
            </div>
          </VuiFlexItem>

          <VuiFlexItem grow={5}>
            <VuiTitle size="s">
              <h3>An all in one AI Research platform</h3>
            </VuiTitle>

            <VuiSpacer size="m" />

            <VuiText>
              <p>
                Keymate.AI is a AI tools platform for researchers. It features
                best-in-class tools no-code or coding tools, API, GPT, SDK and more. The best part is we
                use a grounded generation which all but eliminates
                hallucinations.
              </p>
            </VuiText>

            <VuiSpacer size="s" />

            <VuiFlexContainer>
              <VuiFlexItem grow={5}>
                <VuiText>
                  <p>
                    <VuiLink href="https://keymate.ai" target="_blank">
                      Keymate.AI
                    </VuiLink>
                  </p>
                  <p>
                    <VuiLink
                      href="https://chat.openai.com/g/g-veSrMmasJ-keymate-ai-search-gpt"
                      target="_blank"
                    >
                      Keymate.AI GPT
                    </VuiLink>
                  </p>
                </VuiText>
              </VuiFlexItem>

              <VuiFlexItem grow={5}>
                <VuiText>
                  <p>
                    <VuiLink href="https://help.keymate.ai" target="_blank">
                      Keymate.AI Help Docs
                    </VuiLink>
                  </p>

                  <p>
                    <VuiLink
                      href="https://www.keymate.ai/ultimate-landing/"
                      target="_blank"
                    >
                      Keymate.AI Ultimate
                    </VuiLink>
                  </p>
                </VuiText>
              </VuiFlexItem>
            </VuiFlexContainer>
          </VuiFlexItem>
        </VuiFlexContainer>
      </div>
    </div>
  );
};
