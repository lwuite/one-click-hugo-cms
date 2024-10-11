import { Model } from '@stackbit/types';


export const BlogModel: Model = {
    name: "blog",
    type: "page",
    file: "site/content/post/_index.md",
    singleInstance: true, 
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
