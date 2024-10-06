// https://github.com/netlify-templates/auto-annotated-portfolio/blob/main/.stackbit/models/Config.ts
import { Model } from '@stackbit/types';

export const ConfigModel: Model = {
    type: 'data',
    name: 'Config',
    label: 'Site configuration',
    labelField: 'fixedLabel',
    singleInstance: true,
    filePath: 'site/data/config.yaml',
    fields: [
      {
        name: "titles",
        label: "Titles",
        type: "object",
        fields: [
            {
                name: "newsletter",
                label: "Newsletter Title",
                type: "string",
            },
            {
                name: "company_name",
                label: "Company Name Title",
                type: "string",
            },
            {
                name: "more_info",
                label: "More Info Title",
                type: "string",
            },
            {
                name: "social_media",
                label: "Social Media Title",
                type: "string",
            }
          ]
        },
        {
            type: 'string',
            name: 'fixedLabel',
            const: 'Site configuration',
            hidden: true
        },
        {
            name: "languageCode",
            label: "Language Code",
            type: "string",
        },
        {
            name: "languageLang",
            label: "Language",
            type: "string",
        },
        {
            name: "title",
            label: "Site Title",
            type: "string",
        },
        {
            name: "params",
            label: "Parameters",
            type: "object",
            fields: [
                {
                    name: "blog_label",
                    label: "Blog Label",
                    type: "string",
                },
                {
                    name: "read_more_label",
                    label: "Read More Label",
                    type: "string",
                },
                {
                    name: "logo",
                    label: "Logo Image",
                    type: "image",
                },
                {
                    name: "logo_with_font",
                    label: "Logo with Font Image",
                    type: "image",
                },
                {
                    name: "logo_alt",
                    label: "Logo Alt Text",
                    type: "string",
                },
                {
                    name: "nav_links",
                    label: "Navigation Links",
                    type: "list",
                    items: {
                        type: "object",
                        fields: [
                            {
                                name: "label",
                                label: "Label",
                                type: "string",
                            },
                            {
                                name: "url",
                                label: "URL",
                                type: "string",
                            }
                        ]
                    }
                },
                {
                    name: "footer_nav_left",
                    label: "Footer Navigation Left",
                    type: "list",
                    items: {
                        type: "object",
                        fields: [
                            {
                                name: "label",
                                label: "Label",
                                type: "string",
                            },
                            {
                                name: "url",
                                label: "URL",
                                type: "string",
                            }
                        ]
                    }
                },
                {
                    name: "footer_nav_center",
                    label: "Footer Navigation Center",
                    type: "list",
                    items: {
                        type: "object",
                        fields: [
                            {
                                name: "label",
                                label: "Label",
                                type: "string",
                            },
                            {
                                name: "url",
                                label: "URL",
                                type: "string",
                            }
                        ]
                    }
                },
                {
                    name: "social_media",
                    label: "Social Media",
                    type: "object",
                    fields: [
                        {
                            name: "instagram",
                            label: "Instagram",
                            type: "object",
                            fields: [
                                {
                                    name: "label",
                                    label: "Label",
                                    type: "string",
                                },
                                {
                                    name: "url",
                                    label: "URL",
                                    type: "string",
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    ]
};
