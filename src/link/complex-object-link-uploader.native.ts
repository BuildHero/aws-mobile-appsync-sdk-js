/*!
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import * as S3 from 'aws-sdk/clients/s3';
export default (fileField, { _a }) => {
	var credentials = _a.credentials;
	var Bucket = fileField.bucket,
		Key = fileField.key,
		region = fileField.region,
		ContentType = fileField.mimeType,
		Body = fileField.localUri;
	var s3 = new S3({
		credentials: credentials,
		region: region,
	});
	return new Promise((resolve, reject) => {
		fetch(fileField.localUri).then((data: any) => {
			resolve(
				s3
					.upload({
						Bucket: Bucket,
						Key: Key,
						Body: data._bodyBlob,
						ContentType: ContentType,
					})
					.promise()
			);
		});
	});
};
