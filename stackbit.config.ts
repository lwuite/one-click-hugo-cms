import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

const homeModel = {
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

// Define the post model as a constant
const postModel = {
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

const contactModel = {
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

const productsModel =         {
  name: "products",
  type: "page",
  filePath: "site/content/products/_index.md",
  urlPath: "/products",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "image", type: "image" },
    { name: "heading", type: "string" },
    { name: "description", type: "string" },
    {
      name: "intro",
      type: "object",
      fields: [
        { name: "heading", type: "string" },
        { name: "description", type: "string" },
        {
          name: "blurbs",
          type: "list",
          items: {
            type: "object",
            fields: [
              { name: "image", type: "image" },
              { name: "text", type: "string" },
            ],
          },
        },
      ],
    },
    {
      name: "main",
      type: "object",
      fields: [
        { name: "heading", type: "string" },
        { name: "description", type: "string" },
        {
          name: "image1",
          type: "object",
          fields: [
            { name: "image", type: "image" },
            { name: "alt", type: "string" },
          ],
        },
        {
          name: "image2",
          type: "object",
          fields: [
            { name: "image", type: "image" },
            { name: "alt", type: "string" },
          ],
        },
        {
          name: "image3",
          type: "object",
          fields: [
            { name: "image", type: "image" },
            { name: "alt", type: "string" },
          ],
        },
      ],
    },
    {
      name: "testimonials",
      type: "list",
      items: {
        type: "object",
        fields: [
          { name: "quote", type: "string" },
          { name: "author", type: "string" },
        ],
      },
    },
    { name: "full_image", type: "image" },
    {
      name: "pricing",
      type: "object",
      fields: [
        { name: "heading", type: "string" },
        { name: "description", type: "string" },
        {
          name: "plans",
          type: "list",
          items: {
            type: "object",
            fields: [
              { name: "plan", type: "string" },
              { name: "price", type: "string" },
              { name: "description", type: "string" },
              {
                name: "items",
                type: "list",
                items: { type: "string" },
              },
            ],
          },
        },
      ],
    },
  ],
};

const werkwijzeModel = {
  name: "werkwijze",
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


export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "custom",
  postInstallCommand: "npm i --no-save @stackbit/types",
  devCommand: "npm run preview",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["site/content"],
      models: [
        homeModel,
        postModel,
        contactModel,
        productsModel,
        werkwijzeModel,
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "site/static",
        uploadDir: "img",
        publicPath: "/",
      },
    }),
  ],
});
