import { Model } from '@stackbit/types';


export const WorkingMethodModel: Model = {
  name: "WorkingMethod",
  type: "page",
  file: "site/content/werkwijze/_index.md",
  singleInstance: true, 
  urlPath: "/werkwijze",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "image", type: "image" },
    {
      name: "values",
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
