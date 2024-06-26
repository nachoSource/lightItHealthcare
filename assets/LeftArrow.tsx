import React from "react";
import { SvgXml } from "react-native-svg";
import { colors } from "../src/styles/global.styles";

const xml = `
    <svg fill=${colors.white} width="50" height="50" viewBox="0 0 24 24">
        <g data-name="Layer 2">
            <g data-name="arrow-ios-back">
                <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/>
                <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/>
            </g>
        </g>
    </svg>`;

const LeftArrow = () => <SvgXml xml={xml} height="100%" />;

export default LeftArrow;
