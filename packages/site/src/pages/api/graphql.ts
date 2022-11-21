import { DataExchange } from 'aws-sdk';
import type { NextApiRequest, NextApiResponse } from 'next';

// Replace these 4 values with your own values
const assetId = 'f05f6f7ca415c8be7341f95bf1db34c5';
const datasetId = '4b1f47d86b35356cf8fb6f15cc758c0e';
const revisionId = '4915c8e5e666a284124fc532ca8fbbe2';

const path = '/v1';
const method = 'POST';

const dataExchangeClient = new DataExchange({ region: 'us-east-1' });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log({ req });
  try {
    const response = await dataExchangeClient
      .sendApiAsset({
        AssetId: assetId,
        Body: JSON.stringify(req.body),
        DataSetId: datasetId,
        RequestHeaders: {
          'content-type': 'application/json',
        },
        Method: method,
        Path: path,
        RevisionId: revisionId,
      })
      .promise();
    res.status(200).json(JSON.parse(response.Body!));
  } catch (error: any) {
    console.error(`Request failed with error: ${error}`);
  }
}
