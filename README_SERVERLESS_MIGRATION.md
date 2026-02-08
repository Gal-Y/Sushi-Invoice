# Serverless Migration Guide (AWS)

This guide adds a serverless deployment path in parallel with the existing Elastic Beanstalk flow.

## 1) Verify GitHub and GitLab are in sync

Your local repo currently tracks GitHub as `origin`. If you still have the old GitLab URL, add it and compare:

```bash
git remote add gitlab <your-gitlab-repo-url>
git fetch --all --prune
git log --oneline --left-right --graph origin/main...gitlab/main
```

- Lines with `<` are only on GitHub.
- Lines with `>` are only on GitLab.

If they differ and you want GitHub to become the source of truth:

```bash
git push -u origin main
```

## 2) Deploy backend to Lambda + API Gateway

The serverless backend template is at:

- `infra/sam/template.yaml`

### Prerequisites

- AWS CLI configured
- AWS SAM CLI installed
- Node.js installed

### Build and deploy

```bash
cd backend
npm install
cd ../infra/sam

# Optional: copy sample config so deploy settings are remembered
cp samconfig.example.toml samconfig.toml

# First deploy (guided)
sam build
sam deploy --guided
```

Important parameters during `sam deploy --guided`:

- `UsersTableName`
- `InvoicesTableName`
- `JwtSecret`
- `CorsAllowedOrigins` (frontend domain)

After deploy, note `ApiBaseUrl` from stack outputs.

## 3) Deploy frontend as static site (S3 + optional CloudFront)

Set API base URL at build time:

```bash
cd frontend
REACT_APP_API_BASE_URL=<ApiBaseUrl> npm run build
```

Upload to S3 static site bucket:

```bash
aws s3 sync build/ s3://<your-frontend-bucket> --delete
```

If using CloudFront, invalidate cache:

```bash
aws cloudfront create-invalidation --distribution-id <distribution-id> --paths "/*"
```

## 4) Cutover and decommission Elastic Beanstalk

1. Confirm frontend calls succeed against API Gateway.
2. Run API smoke tests (`/health`, login, invoice create/list).
3. Stop or terminate the Elastic Beanstalk environment to avoid ongoing EC2 cost.

## Notes on code changes included

- Lambda adapter: `backend/lambda.js`
- Optional frontend-serving toggle in backend app: `SERVE_FRONTEND` env var
- Configurable frontend API base URL via `REACT_APP_API_BASE_URL`
