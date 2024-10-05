import { Model } from '@stackbit/types';


export const BlogModel: Model = {
    name: "blog",
    type: "page",
    filePath: "site/content/post/_index.md",
    urlPath: "/post",
    fields: [
      {
        name: "title",
        label: "Title",
        type: "string",
      },
      {
        name: "subtitle",
        label: "Subtitle",
        type: "string",
      },
      {
        name: "jumbotron_image",
        label: "Jumbotron Image",
        type: "image",
      }
    ],
  };
