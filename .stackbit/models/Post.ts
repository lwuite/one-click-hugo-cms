import { Model } from '@stackbit/types';


export const PostModel: Model = {
    name: "post",
    type: "page",
    filePath: "site/content/post/{slug}.md",
    urlPath: "/post/{slug}",
    fields: [
      { name: "title", type: "string", required: true },
      { name: "date", type: "datetime", required: true },
      { name: "description", type: "string" },
      { name: "image", type: "image" },
      { name: "body", type: "markdown", required: true },
    ],
  };
