import { App } from "aws-cdk-lib";
import { WebsiteStack } from "./WebsiteStack";

import { Builder } from "@sls-next/lambda-at-edge";

const builder = new Builder("")

const app = new App();
new WebsiteStack(app, `AlphaStack`, {})