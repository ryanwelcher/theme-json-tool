import { Duotone, Gradient, Color } from "./color";
import { NameSlug, NameSlugRequired } from "./primitives";
export interface SettingsBorder {
    /** Allow users to set custom border colors. */
    color?: boolean;
    /** Allow users to set custom border radius. */
    radius?: boolean;
    /** Allow users to set custom border styles */
    style?: boolean;
    /** Allow users to set custom border widths. */
    width?: boolean;
}
export interface SettingsColor {
    background?: boolean;
    custom?: boolean;
    customDuotone?: boolean;
    customGradient?: boolean;
    defaultDuotone?: boolean;
    defaultGradients?: boolean;
    defaultPalette?: boolean;
    duotone?: Array<Duotone>;
    gradients?: Array<Gradient>;
    link?: boolean;
    palette?: Array<Color>;
    text?: boolean;
}
export interface ShadowPreset extends NameSlugRequired {
    shadow: string;
}
export interface SettingsShadow {
    defaultPresets?: boolean;
    presets?: Array<ShadowPreset>;
}
export interface SettingsDimensions {
    minHeight?: boolean;
}
export interface SettingsLayout {
    contentSize?: string;
    wideSize?: string;
}
export interface SettingsPosition {
    sticky?: boolean;
}
export interface SpacingSize extends NameSlug {
    size?: string;
}
export interface SettingsSpacing {
    blockGap?: boolean | null;
    margin?: boolean;
    padding?: boolean;
    units?: Array<string>;
    customSpacingSize?: boolean;
    spacingSizes?: Array<SpacingSize>;
}
export interface SettingSpacingScale {
    operator?: string;
    increment?: number;
    steps?: number;
    mediumStep?: number;
    unit?: string;
}
/**
 * Main settings object
 */
export interface SettingsProperties {
    appearanceTools?: Boolean;
    border?: SettingsBorder;
    color?: SettingsColor;
    custom?: Object;
    dimensions?: SettingsDimensions;
    layout?: SettingsLayout;
    position?: SettingsPosition;
    shadow?: SettingsShadow;
    spacing?: SettingsSpacing;
    spacingScale?: SettingSpacingScale;
    /** Setting that enables the following UI tools: border: color, radius, style, width. color: link\n- dimensions: minHeight\n- position: sticky\n- spacing: blockGap, margin, padding\n- typography: lineHeight */
    typography?: Object;
    /** _**Note:** Since WordPress 6.1._\n\nEnables root padding (the values from `styles.spacing.padding`) to be applied to the contents of full-width blocks instead of the root block.\n\nPlease note that when using this setting, `styles.spacing.padding` should always be set as an object with `top`, `right`, `bottom`, `left` values declared separately.*/
    useRootPaddingAwareAlignments?: Boolean;
}
