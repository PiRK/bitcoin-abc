// Copyright (c) 2024 The Bitcoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

import styled from 'styled-components';
import { token as tokenConfig } from 'config/token';
import { CollapseDownIcon } from 'components/Common/CustomIcons';

export const CollectionLoading = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 12px auto;
`;

export const CollectionWrapper = styled.div<{ isCollapsed: boolean }>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    color: ${props => props.theme.primaryText};
    width: ${props => (props.isCollapsed ? '20%' : '100%')};
    padding: 16px;
    @media (max-width: 1600px) {
        width: ${props => (props.isCollapsed ? '25%' : '100%')};
    }
    @media (max-width: 1400px) {
        width: ${props => (props.isCollapsed ? '33.3%' : '100%')};
    }
    @media (max-width: 1000px) {
        width: ${props => (props.isCollapsed ? '50%' : '100%')};
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;
export const CollectionSummary = styled.div<{ isCollapsed: boolean }>`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: row;
    gap: 3px;
    flex-wrap: wrap;
    padding: 6px;
    border-radius: ${props =>
        props.isCollapsed ? '20px' : '20px 20px 0px 0px'};
    background: ${props => props.theme.primaryBackground};
    border: 1px solid ${props => props.theme.border};
    border-bottom: none;
    ${props =>
        props.isCollapsed && `border-bottom: 1px solid ${props.theme.border}`};
`;

export const ArrowWrapper = styled.div<{ isCollapsed: boolean }>`
    width: 64px;
    height: 64px;
    display: flex;
    svg {
        height: 64px;
        width: 64px;
        transition: transform 0.3s ease;
        fill: ${props => (props.isCollapsed ? 'red' : 'blue')};
        transform: ${props =>
            props.isCollapsed ? 'rotate(0deg)' : 'rotate(-180deg)'};
    }
`;
export const Arrow = styled(CollapseDownIcon)``;

export const CollapsibleContent = styled.div<{ isCollapsed: boolean }>`
    max-height: ${props => (props.isCollapsed ? '0' : '600px')};
    width: 100%;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    ${props =>
        !props.isCollapsed &&
        `border-radius: 0 0 20px 20px;
    background: ${props.theme.primaryBackground};
    border-left: 1px solid ${props.theme.border};
    border-right: 1px solid ${props.theme.border};
    border-bottom: 1px solid ${props.theme.border};
        `}
`;
export const TitleAndIconAndCollapseArrow = styled.button`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.primaryText};
    cursor: pointer;
`;

export const CollectionTitle = styled.div`
    display: flex;
    flex-direction: column;
    word-break: break-all;
    font-size: var(--text-xl);
    line-height: var(--text-xl--line-height);
    font-weight: bold;
    margin: 20px 0 0;
`;
export const CollectionIcon = styled.div<{ isCollapsed: boolean }>`
    width: 100%;
    height: 200px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    display: ${props => (props.isCollapsed ? 'flex' : 'none')};
    img {
        height: 100%;
        width: auto;
        border-radius: 200px;
    }
`;
export const CollectionInfoRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
`;

export const ListedNft = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 36px;
`;
export const NftName = styled.div`
    display: flex;
    justify-content: center;
    word-break: break-all;
    width: 100%;
    line-height: 25px;
    padding: 6px 0;
`;
export const NftPrice = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    line-height: 25px;
`;
export const NftInfoRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;
export const ButtonRow = styled(NftInfoRow)`
    margin: 6px 12px;
`;

export const NftIcon = styled.button<{ tokenId: string; size: number }>`
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    margin: auto;
    width: 256px;
    height: 256px;
    background: url(${props =>
            `${tokenConfig.tokenIconsUrl}/${props.size}/${props.tokenId}.png`})
        center no-repeat;
    background-size: 100% 100%;
    transition: all ease-in-out 1s;
    :hover {
        background-size: 150% 150%;
    }
`;
export const NftSwiperSlide = styled.div`
    background-color: ${props => props.theme.secondaryBackground};
`;
export const ModalFlex = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    color: ${props => props.theme.primaryText};
`;
export const ModalRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;
