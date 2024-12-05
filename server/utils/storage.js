const AWS = require('aws-sdk');

const keys = require('../config/keys');

exports.s3Upload = async image => {
  try {
    let imageUrl = '';
    let imageKey = '';

    if (!keys.aws.accessKeyId) {
      console.warn('Missing aws keys');
    }
    if (!image || !image.buffer || !image.originalname || !image.mimetype) {
      throw new Error('Invalid image object. Ensure buffer, originalname, and mimetype are provided.');
    }

    // Check for missing AWS credentials
    if (!keys.aws.accessKeyId || !keys.aws.secretAccessKey || !keys.aws.bucketName) {
      throw new Error('Missing AWS configuration. Check your accessKeyId, secretAccessKey, and bucketName.');
    }
    if (image) {
      const s3bucket = new AWS.S3({
        accessKeyId: keys.aws.accessKeyId,
        secretAccessKey: keys.aws.secretAccessKey,
        region: keys.aws.region
      });

      const params = {
        Bucket: keys.aws.bucketName,
        Key: image.originalname,
        Body: image.buffer,
        ContentType: image.mimetype
      };

      const s3Upload = await s3bucket.upload(params).promise();
      imageUrl = s3Upload.Location;
      imageKey = s3Upload.key;
    }

    return { imageUrl, imageKey };
  } catch (error) {
    console.log(error);
    return { imageUrl: '', imageKey: '' };
  }
};
