# SeFeDa Landing Page 🔥

This is the source code of the landing page of SeFeDa.

## Getting Started 🚀
### Prerequisites
- Git installed (2.17.+)
- NPM installed (6.14.+)
- Angular CLI installed (12.+)

### Steps
1. Clone the repository
2. Switch into the directory
3. Run `npm install` for installing the dependencies
3. Run `ng serve` for creating a development server
4. Navigate to `http://localhost:4200/`

## Contributing ➕
Since this is a small repository it is easier to commit directly on the `master` branch.

## Continuous Deployment ⚡
This repository triggers a Github Action as soon changes are pushed to the `release` branch. This action executes a production build and deploys it to Firebase. <br>

### Steps
1. Make sure all your changes you want to publish are on `origin/master`
2. Run `git checkout release`
2. Run `git fetch`
3. Run `git rebase origin/master`
4. Run `git push`
