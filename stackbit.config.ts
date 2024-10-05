import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "hugo",
  postInstallCommand: "yarn add --no-save @stackbit/types",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["site/content"],
      models: [    // Post Model
        {
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
                  { name: "text", type: "markdown" },
                ],
              },
              {
                name: "intro",
                type: "object",
                fields: [
                  { name: "heading", type: "string" },
                  { name: "text", type: "markdown" },
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
                  { name: "text", type: "markdown" },
                ],
              },
          ],
        },
        {
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
        },
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
