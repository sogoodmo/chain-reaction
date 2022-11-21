import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { NextJSLambdaEdge } from "@sls-next/cdk-construct";

export class WebsiteStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const nextLambda = new NextJSLambdaEdge(this, "NextLambda", {
      serverlessBuildOutDir: '../../site/.next/',
    })

    new CfnOutput(this, "DistributionDomainName", {
      value: nextLambda.distribution.distributionDomainName,
      exportName: "distributionDomainName",
    });
  }
}
