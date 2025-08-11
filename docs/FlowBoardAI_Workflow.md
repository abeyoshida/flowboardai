# FlowBoardAI Development Workflow

This document outlines the recommended development workflow for FlowBoardAI, where the production environment is built from the `main` branch via Vercel.

## Branching Strategy

1. **Main Branch**  
   - This branch is connected to Vercel for the production environment.
   - Only production-ready code will be merged into this branch.

2. **Development Branch**  
   - Create a dedicated `development` branch from `main`.
   - Use this branch as the integration layer for all new features and improvements.

3. **Feature Branches**  
   - Developers should create feature-specific branches off the `development` branch.
   - Once a feature is completed, open a pull request to merge into `development`.

## Syncing Production Changes

To ensure your development branch stays up-to-date with production:

```bash
# On your development branch, periodically merge the latest changes from main:
git checkout development
git merge main
```

Alternatively, you can use rebase:

```bash
git checkout development
git rebase main
```

This helps to minimize conflicts and ensures that your development branch incorporates any hotfixes or other changes made directly in production.

## Vercel Integration

- **Preview Deployments:**  
  Vercel can generate a preview deployment for each pull request. This allows testing in an isolated environment before merging to `main`.
  
- **Production Deployment:**  
  Merges to `main` should trigger a Vercel production build.

## Continuous Integration (CI)

- It's recommended to set up a CI pipeline so that merging into the `development` branch triggers tests and a preview deployment via Vercel.
- Merging into the `main` branch should trigger the production deployment process.

## Best Practices

- **Feature Isolation:** Work on isolated feature branches to streamline testing and code review.
- **Regular Syncing:** Periodically update the `development` branch with changes from the `main` branch.
- **Automated Testing:** Integrate appropriate testing frameworks in the CI pipeline.
- **Documentation:** Maintain this document as part of the project repository to onboard new team members.

Adopting this workflow helps ensure a smooth development process and maintains synchronization between your production and development environments.