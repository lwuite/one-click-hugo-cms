import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";
import { allModels } from './.stackbit/models';


export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "custom",
  postInstallCommand: "npm i --no-save @stackbit/types",
  devCommand: "npm run preview",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["site/content","site/data"],
      models: allModels,
      assetsConfig: {
        referenceType: "static",
        staticDir: "site/static",
        uploadDir: "img",
        publicPath: "/",
      },
    }),
  ],
});
