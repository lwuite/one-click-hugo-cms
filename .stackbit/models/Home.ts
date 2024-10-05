import { Model } from '@stackbit/types';


export const HomeModel: Model = {
    name: "home",
    type: "page",
    filePath: "site/content/_index.md",
    urlPath: "/",
    fields: [
      { name: "title", type: "string", required: true },
      { name: "subtitle", type: "string" },
      { name: "image", type: "image" },
      {
        name: "blurb",
        type: "object",
        fields: [
          { name: "heading", type: "string" },
          { name: "text", type: "string" },
        ],
      },
      {
        name: "intro",
        type: "object",
        fields: [
          { name: "heading", type: "string" },
          { name: "text", type: "string" },
        ],
      },
      {
        name: "products",
        type: "list",
        items: {
          type: "object",
          fields: [
            { name: "image", type: "image" },
            { name: "text", type: "string" },
          ],
        },
      },
      {
        name: "values",
        type: "object",
        fields: [
          { name: "heading", type: "string" },
          { name: "text", type: "string" },
          { name: "buttonText", type: "string" }, // added buttonText
          { name: "buttonLink", type: "string" }, // added buttonLink
          {
            name: "image",
            type: "object", // image object added
            fields: [
              { name: "src", type: "image" },  // added image src
              { name: "alt", type: "string" },  // added image alt
            ],
          },
        ],
      },
    ],
  };
