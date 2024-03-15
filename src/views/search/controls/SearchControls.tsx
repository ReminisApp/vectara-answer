import { ChangeEvent, FormEvent, useState } from "react";
import { BiDetail, BiSlider, BiTimeFive } from "react-icons/bi";
import { useConfigContext } from "../../../contexts/ConfigurationContext";
import {
  VuiFlexContainer,
  VuiFlexItem,
  VuiSearchInput,
  VuiSpacer,
  VuiTitle,
  VuiTextColor,
  VuiText,
  VuiIcon,
  VuiButtonSecondary,
  VuiLink,
} from "../../../ui";
import { useSearchContext } from "../../../contexts/SearchContext";
import "./searchControls.scss";
import { HistoryDrawer } from "./HistoryDrawer";
import { OptionsDrawer } from "./OptionsDrawer";
import { IoShareSocial } from "react-icons/io5";
import { SearchResultsDrawer } from "../progressReport/SearchResultsDrawer";

type Props = {
  hasQuery: boolean;
};

export const SearchControls = ({ hasQuery }: Props) => {
  const { filterValue, setFilterValue, searchValue, setSearchValue, onSearch, reset, doiQValue, summarizationResponse, searchResults, isSearching, summaryTime } =
    useSearchContext();
  const { searchHeader, filters } = useConfigContext();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const [isReviewSearchResultsOpen, setIsReviewSearchResultsOpen] =
    useState(false);

  const rawSummary = summarizationResponse?.summary[0]?.text;
  const numSearchResults = searchResults?.length;

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const humanizeTime = (ms: number) => {
    return `${(ms / 1000).toFixed(2)} seconds`;
  };

  const onSearchSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch({ value: searchValue });
  };

  const filterOptions: Array<{ value: string; text: string }> = [];

  if (filters.isEnabled) {
    if (filters.allSources) {
      filterOptions.push({
        text: "All sources",
        value: "",
      });
    }

    // if allSources is false, then we set the filterValue is set to the first source
    // In this case the "All sources" button is not there, and the first source is selected by default
    if (!filters.allSources && filterValue === "") {
      console.log("filterValue", filters.sources[0].value)
      setFilterValue(filters.sources[0].value)
    }

    filters.sources.forEach(({ value, label }) => {
      filterOptions.push({ text: label, value });
    });
  }

  return (
    <>
      <div className="searchControls">
        <VuiFlexContainer alignItems="center" justifyContent="spaceBetween">
          <VuiFlexItem grow={false}>
            <VuiFlexContainer alignItems="center">
              <VuiFlexItem grow={false}>
                <VuiTitle size="m">
                  <VuiLink href="/">
                    <h2>
                      <strong>All Knowledge</strong>
                    </h2>
                  </VuiLink>
                </VuiTitle>
              </VuiFlexItem>
            </VuiFlexContainer>
          </VuiFlexItem>

          <VuiFlexItem grow={false}>
            <VuiTitle size="xxs" align="right">
              <VuiTextColor color="subdued" className="owner">
                <h2 style={{ whiteSpace: "pre-line" }}>
                  Curated by Username
                </h2>
              </VuiTextColor>
            </VuiTitle>
          </VuiFlexItem>

          <VuiFlexItem grow={false}>
            <VuiFlexContainer alignItems="center" spacing="s">
              <VuiFlexItem grow={false}>
                <VuiButtonSecondary
                  color="neutral"
                  size="s"
                  isSelected={isOptionsOpen}
                  onClick={() => setIsOptionsOpen(!isOptionsOpen)}
                  icon={
                    <VuiIcon size="m">
                      <BiSlider />
                    </VuiIcon>
                  }
                  className="searchButton"
                >
                </VuiButtonSecondary>
              </VuiFlexItem>

              <VuiFlexItem grow={false}>
                <VuiButtonSecondary
                  color="neutral"
                  size="s"
                  isSelected={isHistoryOpen}
                  onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                  icon={
                    <VuiIcon size="m">
                      <BiTimeFive />
                    </VuiIcon>
                  }
                  className="searchButton"
                >
                </VuiButtonSecondary>
              </VuiFlexItem>
            </VuiFlexContainer>
          </VuiFlexItem>
        </VuiFlexContainer>

        <VuiSpacer size="m" />

        <VuiSearchInput
          size="l"
          value={searchValue}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          placeholder={searchHeader.placeholder ?? ""}
          autoFocus
          className="searchInput"
        />

        <VuiSpacer size="m" />

        <VuiFlexContainer alignItems="center" justifyContent="spaceBetween">
          {filters.isEnabled && (
            /*             <VuiFlexItem grow={false}>
                          
                          <VuiFlexContainer
                              alignItems="center"
                              wrap={true}
                              spacing="xs"
                              className="filtersBar"
                            >
            
                              <VuiFlexItem grow={false}>
                                <legend>
                                  <VuiText>
                                    <VuiTextColor color="subdued">
                                      <p>Filter by source</p>
                                    </VuiTextColor>
                                  </VuiText>
                                </legend>
                              </VuiFlexItem>
            
                              <VuiFlexItem grow={1}>
                                <VuiFlexContainer
                                  alignItems="center"
                                  wrap={true}
                                  spacing="xxs"
                                >
                                  {filterOptions.map((option) => {
                                    const isSelected = option.value === filterValue;
                                    return (
                                      <VuiFlexItem key={option.value}>
                                        <VuiBadge
                                          color={isSelected ? "primary" : "neutral"}
                                          onClick={() =>
                                            onSearch({
                                              filter: isSelected ? "" : option.value,
                                            })
                                          }
                                        >
                                          {option.text}
                                        </VuiBadge>
                                      </VuiFlexItem>
                                    );
                                  })}
                                </VuiFlexContainer>
                              </VuiFlexItem>
                            </VuiFlexContainer>
                        </VuiFlexItem> */
            <VuiFlexItem grow={false}>
              <VuiText>
                <VuiTextColor color="subdued">
                  <p style={{
                    padding: 0,
                    margin: 0,
                    marginBottom: "5px"
                  }}>Results are based on: {doiQValue ? doiQValue : "All Papers"}</p>
                  {(rawSummary && !isSearching) &&
                    <VuiText className="resultText">
                      Retrieved {numSearchResults} search
                      <VuiButtonSecondary
                        size="s"
                        color="primary"
                        onClick={() => setIsReviewSearchResultsOpen(true)}
                        icon={
                          <VuiIcon>
                            <BiDetail />
                          </VuiIcon>
                        }
                      >
                        results
                      </VuiButtonSecondary>
                      -
                      <VuiText>Generated summary in {humanizeTime(summaryTime)}.</VuiText>
                    </VuiText>}
                </VuiTextColor>
              </VuiText>
            </VuiFlexItem>
          )}

          {hasQuery && (
            <VuiFlexItem grow={false}>
              <VuiButtonSecondary
                color="neutral"
                size="s"
                onClick={() => reset()}
                className="searchShareButton"
              >
                <IoShareSocial size="15px" /><p>Share Results</p>
              </VuiButtonSecondary>
            </VuiFlexItem>
          )}
        </VuiFlexContainer>
      </div>

      <HistoryDrawer
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
      />

      <OptionsDrawer
        isOpen={isOptionsOpen}
        onClose={() => setIsOptionsOpen(false)}
      />

      <SearchResultsDrawer
        isOpen={isReviewSearchResultsOpen}
        onClose={() => setIsReviewSearchResultsOpen(false)}
      />
    </>
  );
};
