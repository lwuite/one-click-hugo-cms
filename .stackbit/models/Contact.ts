import { Model } from '@stackbit/types';


export const ContactModel: Model = {
    name: "contact",
    type: "page",
    filePath: "site/content/contact/_index.md",
    urlPath: "/contact",
    fields: [
      { name: "title", type: "string", required: true },
      { name: "logo", type: "image" },
      { name: "body", type: "markdown", required: true },
      {
        name: "contact_entries",
        type: "list",
        items: {
          type: "object",
          fields: [
            { name: "heading", type: "string" },
            { name: "text", type: "string" },
          ],
        },
      },
    ],
  };
