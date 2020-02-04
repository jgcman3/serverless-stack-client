export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-northeast-2",
    BUCKET: "notes-app-uploads-2020"
  },
  apiGateway: {
    REGION: "ap-northeast-2",
    URL: "https://hrjlsh0vlj.execute-api.ap-northeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-notrheast-2",
    USER_POOL_ID: "ap-northeast-2_aFaEZg5NI",
    APP_CLIENT_ID: "638aq9tgsb4i93daa27pe4oljg",
    IDENTITY_POOL_ID: "ap-northeast-2:cc3c168a-b0ca-45ee-9255-3d16a790ebe0"
  }
};
