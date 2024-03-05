import React, {forwardRef, useEffect, useState} from "react";
import {
    VuiText,
    VuiTextColor,
    VuiFlexContainer,
    VuiFlexItem,
    VuiBadge,
    VuiSearchResult, VuiButtonSecondary,
} from "../../../ui";
import { truncateEnd, truncateStart } from "../../../ui/utils/truncateString";
import { useSearchContext } from "../../../contexts/SearchContext";
import { useConfigContext } from "../../../contexts/ConfigurationContext";
import { DeserializedSearchResult } from "../types";
import "./SearchResult.scss";

type Props = {
  result: DeserializedSearchResult;
  position: number;
  isSelected: boolean;
};

const CONTEXT_MAX_LENGTH = 200;

export const SearchResult = forwardRef<HTMLDivElement | null, Props>(
  ({ result, position, isSelected }: Props, ref) => {
      const [isDoiQSet, setisDoiQSet] = useState(false);
    const { filters } = useConfigContext();
    const { onSearch } = useSearchContext();
      const getQueryParam = (urlParams: URLSearchParams, key: string) => {
          const value = urlParams.get(key);
          if (value) return decodeURIComponent(value);
          return undefined;
      };
      useEffect(() => {
         const isDoiQSetP = getQueryParam(new URLSearchParams(window.location.search), "doiQ");
         if (isDoiQSetP) {
             console.log(isDoiQSetP);
             setisDoiQSet(true);
         }
      }, [isDoiQSet,setisDoiQSet]);
    const {
      source,
      title,
        bibtex,
      authors,
      doi,
      year,
        pdfname,
      url,
      snippet: { pre, post, text },
    } = result;

    return (
      <VuiSearchResult
        ref={ref}
        isSelected={isSelected}
        result={{
          title,
          url,
            bibtex,
            authors,
            doi,
            year,
            pdfname,
          snippet: {
            pre: truncateStart(pre, CONTEXT_MAX_LENGTH),
            text,
            post: truncateEnd(post, CONTEXT_MAX_LENGTH),
          },
        }}
        position={position + 1}
        subTitle={
          Boolean(filters.isEnabled || url) && (
            <VuiFlexContainer
              alignItems="center"
              spacing="xs"
              className="searchResultFilterGroup"
            >
              {filters.isEnabled && (
                <VuiFlexItem>
                  <VuiBadge
                    aria-label={`Filter by source ${
                      filters.sourceValueToLabelMap
                        ? filters.sourceValueToLabelMap[source]
                        : source
                    }`}
                    color="neutral"
                    onClick={() => onSearch({ filter: source })}
                  >
                    {filters.sourceValueToLabelMap
                      ? filters.sourceValueToLabelMap[source]
                      : source}
                  </VuiBadge>
                </VuiFlexItem>
              )}

              {url && (
                <VuiFlexItem grow={1}>
                  <VuiText size="s" className="searchResultSiteCategory">
                    <p>
                      <VuiTextColor color="subdued">{url}</VuiTextColor>
                    </p>
                  </VuiText>
                </VuiFlexItem>
              )}

                {year && (
                    <VuiFlexItem grow={1}>
                        <VuiText size="s" className="searchResultSiteCategory">
                            <p>
                                <VuiTextColor color="subdued">{year}</VuiTextColor>
                            </p>
                        </VuiText>
                    </VuiFlexItem>
                )}
                {pdfname && (
                    <VuiFlexItem grow={1}>
                        <VuiText size="s" className="searchResultSiteCategory">
                            <p>
                                <VuiTextColor color="subdued">{pdfname}</VuiTextColor>
                            </p>
                        </VuiText>
                    </VuiFlexItem>
                )}
                {/*{doi && (
                    <VuiFlexItem>
                        <VuiButtonSecondary color="neutral" size="s" onClick={() => {onSearch({ doiQ: doi })}}>
                            Filter results by this paper
                        </VuiButtonSecondary>
                    </VuiFlexItem>
                )}*/}
                {doi && !isDoiQSet && (
                    <VuiFlexItem>
                        <VuiButtonSecondary color="neutral" size="s" onClick={() => {onSearch({ doiQ: doi })}}>
                            Filter results by this paper
                        </VuiButtonSecondary>
                    </VuiFlexItem>
                )}

            </VuiFlexContainer>
          )
        }
      />
    );
  }
);
