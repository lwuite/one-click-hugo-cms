import { Model } from '@stackbit/types';

export const ConfigModel: Model = {
    type: 'data',
    name: 'Config',
    label: 'Site Configuration',
    labelField: 'fixedLabel',
    singleInstance: true,
    filePath: 'site/data/config.yaml',
    fields: [
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
            name: "branding",
            label: "Branding",
            type: "object",
            fields: [
                {
                    name: "logo",
                    label: "Primary Logo",
                    type: "image",
                },
                {
                    name: "logo_with_font",
                    label: "Logo with Font",
                    type: "image",
                },
                {
                    name: "logo_alt",
                    label: "Logo Alt Text",
                    type: "string",
                }
            ]
        },
        {
            name: "global",
            label: "Global Settings",
            type: "object",
            fields: [
                {
                    name: "read_more_label",
                    label: "Read More Button Label",
                    type: "string",
                }
            ]
        },
        {
            name: "blog",
            label: "Blog Settings",
            type: "object",
            fields: [
                {
                    name: "blog_label",
                    label: "Blog Section Label",
                    type: "string",
                }
            ]
        },
        {
            name: "menu",
            label: "Menu Navigation",
            type: "object",
            fields: [
                {
                    name: "nav_links",
                    label: "Primary Navigation Links",
                    type: "list",
                    items: {
                        type: "object",
                        fields: [
                            {
                                name: "label",
                                label: "Link Label",
                                type: "string",
                            },
                            {
                                name: "url",
                                label: "Link URL",
                                type: "string",
                            }
                        ]
                    }
                }
            ]
        },
        {
            name: "footer",
            label: "Footer Settings",
            type: "object",
            fields: [
                {
                    name: "footer_nav_left",
                    label: "Footer Navigation (Left Column)",
                    type: "list",
                    items: {
                        type: "object",
                        fields: [
                            {
                                name: "label",
                                label: "Link Label",
                                type: "string",
                            },
                            {
                                name: "url",
                                label: "Link URL",
                                type: "string",
                            }
                        ]
                    }
                },
                {
                    name: "footer_nav_center",
                    label: "Footer Navigation (Center Column)",
                    type: "list",
                    items: {
                        type: "object",
                        fields: [
                            {
                                name: "label",
                                label: "Link Label",
                                type: "string",
                            },
                            {
                                name: "url",
                                label: "Link URL",
                                type: "string",
                            }
                        ]
                    }
                },
                {
                    name: "social_media",
                    label: "Social Media Links",
                    type: "object",
                    fields: [
                        {
                            name: "instagram",
                            label: "Instagram",
                            type: "object",
                            fields: [
                                {
                                    name: "label",
                                    label: "Platform Label",
                                    type: "string",
                                },
                                {
                                    name: "url",
                                    label: "Profile URL",
                                    type: "string",
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "titles",
                    label: "Footer Section Titles",
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
                }
            ]
        }
    ]
};
