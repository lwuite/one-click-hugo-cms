import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "hugo",
  postInstallCommand: "npm i --no-save @stackbit/types",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["site/content"],
      models: [    // Post Model
        {
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
        },
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
              name: "werkwijze",
              type: "object",
              fields: [
                { name: "heading", type: "string" },
                { name: "text", type: "string" },
              ],
            },
          ],
        },
        {
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
        {
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
