# Boilerplate for AEM Crosswalk
This is our Crosswalk boilerplate.

## Table of Contents
- [Getting started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Linting](#linting)


### Prerequisites

- GitHub account
- Universal Editor
- npm
  ```sh
  npm i
  ```

### Installation

1. Create your repository using the Boilerplate GitHub repository as a template:
   https://github.com/diva-e-aem/xwalk-boilerplate

2. Add the AEM Code Sync GitHub App to the repository:
   https://github.com/apps/aem-code-sync/installations/new

    - Select `Only select Repositories` (not `All Repositories`).

3. Link content source
    - Change the reference in `fstab.yaml` in your GitHub repo to the URL of your AEM as a Cloud Service authoring instance and commit the changes.

5. Start development
    - Create Site from Template by downloading the latest WYSIWYG authoring with Edge Delivery Services site template from GitHub at https://github.com/adobe-rnd/aem-boilerplate-xwalk/releases and import it.
    - Open Universal Editor "standalone" directly via https://experience.adobe.com/#/aem/editor

## Linting

```sh
npm run lint
```
