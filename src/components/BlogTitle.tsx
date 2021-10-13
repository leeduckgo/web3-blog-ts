import * as React from "react";
import styled from "styled-components";

const SBannerWrapper = styled.div`
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.75rem;
    color: inherit;
    font-family: Montserrat,sans-serif;
    font-weight: 900;
    text-rendering: optimizeLegibility;
    font-size: 2.5rem;
    line-height: 1.1;
`;

const SBanner = styled.div`
font-size: 3.95285rem;
    line-height: 4.375rem;
    margin-bottom: 2.625rem;
    margin-top: 0;
`;

const Banner = () => (
  <SBannerWrapper>
    <SBanner />
    <span>{`Gatsby Starter Blog`}</span>
  </SBannerWrapper>
);

export default Banner;
