import { SettingsProperties } from "./settings";
import { TemplatePart, CustomTemplate } from "./templates";


export interface ThemeJSON {
    $schema: string,
    version: number,
    settings?: SettingsProperties;
    styles?: Object;
    templateParts?: Array<TemplatePart>;
    customTemplates?: Array<CustomTemplate>

}

export * from './settings'
export * from './templates'
