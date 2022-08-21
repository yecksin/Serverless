# instalar global serverless global
# conectar cuenta iam
serverless config credentials --overwrite --provider aws --key AKIAXW5J7X7AI4P7FYUX --secret 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

# instalar plugin de ts
https://www.serverless.com/plugins/serverless-plugin-typescript

npm install -D serverless-plugin-typescript typescript

plugins:
  - serverless-plugin-typescript