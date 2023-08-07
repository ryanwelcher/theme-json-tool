interface TemplateBase {
    /** Filename, without extension, of the template in the parts folder. */
    name: string;
    /** Title of the template, translatable. */
    title?: string;
}
export interface TemplatePart extends TemplateBase {
    /** The area the template part is used for. Block variations for `header` and `footer` values exist and will be used when the area is set to one of those. */
    area?: string;
}
export interface CustomTemplate extends TemplateBase {
    /** List of post types that can use this custom template */
    postTypes?: Array<string>;
}
export {};
