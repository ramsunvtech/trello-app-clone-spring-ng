## Contributing

Welcome to Trello App using Spring and Angular Contribution Docs. Below are the guidelines. Happy Coding !

### Commit Message Format
Each commit message consists of a simple pattern.  Below is the
format that includes a **type**, a **scope**, a **story-id** and a **subject** and every Pull Request's commit should be squashed.

```
<type>(<scope>): #Story-ID - <subject or your message>
```

## Commit Message Guidelines
Guidelines gives precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the App change log**.

### Revert
If the commit reverts a previous commit, it should begin with `revert(<scope>): #Story-ID - Your Message `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type
Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **tech**: Any Technical Activities.
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests
* **e2e**: Adding E2E Tests

### Scope
The scope should be the name of the modules / directory affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

### Angular
* **ui/general** - In General Changes.
* **components/<componentName>** - Component Changes
* **store** - Store Changes
* **modules/<moduleName>** - Module Changes
* **services/<serviceName>** - Services Changes
* **hooks/<hooksName>** - Custom Hook Changes
* **pipes/<hooksName>** - Pipes Changes
* **i18n** - Locale Text Changes
* **theme** - Material UI Custom Theme Changes
* **action/<actionName>** - Redux Action Changes
* **selector/<selectorName>** - Redux Store Selector Changes
* **reducer/<reducerName>** - Redux Store Reducer Changes
* **mock/apiName** - Mock API Changes

### Spring
* **api/general** - In General Changes.
* **controller/<controllerName>** - Controller Changes
* **model/<modelName>** - Model Changes
* **services/<serviceName>** - Services Changes
* **mock/apiName** - Mock API Changes
  
### Cypress
* **moduleName** - Module Name Changes.
* **general** - General Changes.
