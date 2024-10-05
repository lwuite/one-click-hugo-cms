import { Model } from '@stackbit/types';


export const WorkingMethodModel: Model = {
  name: "WorkingMethod",
  type: "page",
  filePath: "site/content/werkwijze/_index.md",
  urlPath: "/werkwijze",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "image", type: "image" },
    {
      name: "werkwijze",
      type: "list",
      items: {
        type: "object",
        fields: [
          { name: "heading", type: "string" },
          { name: "text", type: "string" },
          { name: "imageUrl", type: "image" },
        ],
      },
    },
  ],
};
