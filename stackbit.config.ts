import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "hugo",
    "contentSources": [],
    "postInstallCommand": "yarn add --no-save @stackbit/types"
})