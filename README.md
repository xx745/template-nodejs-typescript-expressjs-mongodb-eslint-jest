# gym-tracker
Simple app to record gym visits

## Setup secrets
```
cp .env.example .env
```

## Install dependencies
```
nvm install 19
corepack enable
corepack prepare yarn@stable --activate
yarn config set --home enableTelemetry 0
yarn install
yarn dlx @yarnpkg/sdks vscode
```
ref: https://yarnpkg.com/getting-started/editor-sdks
Reload VSCode
