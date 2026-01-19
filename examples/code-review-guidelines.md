# Code Review Guidelines

## Metadata

- **Category**: Development
- **Status**: Active
- **Last Updated**: 2026-01-19
- **Owner**: Engineering Team
- **Reviewers**: Tech Leads

## Purpose

Establish a consistent and effective code review process that improves code quality, shares knowledge, and catches issues early in the development cycle.

## Scope

This guideline covers the code review process for all production code changes.

### In Scope
- Pull request requirements
- Reviewer responsibilities
- Author responsibilities
- Review timelines

### Out of Scope
- Specific coding style rules (covered in separate style guides)
- Emergency hotfix processes
- Documentation-only changes

## Guideline

Code reviews are a critical quality gate. Every code change must be reviewed by at least one other developer before merging to the main branch.

### Key Principles

1. **Respectful Communication**: Critique code, not people. Be constructive and kind.
2. **Timely Reviews**: Respond to review requests within one business day.
3. **Shared Responsibility**: Both authors and reviewers are responsible for code quality.

### Requirements

#### Must Have
- All production code changes require at least one approval
- PR description clearly explains what and why
- All CI checks must pass before merging
- No unresolved conversations at merge time

#### Should Have
- Tests covering new functionality
- Documentation updates for user-facing changes
- Small, focused PRs (under 400 lines when possible)

#### Must Not
- Approve PRs you don't understand
- Merge your own PRs without approval
- Review code while distracted or rushed

## Examples

### Good Example - PR Description

```markdown
## What
Add pagination support to the user list endpoint

## Why
The user list was loading slowly with 10,000+ users. Pagination
improves response time and reduces memory usage.

## How
- Added page and limit query parameters
- Updated UserRepository with pagination logic
- Added tests for edge cases
- Updated API documentation

## Testing
- Tested with various page sizes
- Verified behavior with empty results
- Checked edge cases (page 0, negative limits)
```

**Why this works**: Clear explanation of changes, reasoning, and testing approach helps reviewers understand context.

### Bad Example - PR Description

```markdown
Fixed the thing
```

**Why this doesn't work**: No context, no explanation of what was changed or why. Forces reviewers to decode the entire change.

## Implementation

### For Authors

1. **Before Creating PR**
   - Ensure all tests pass locally
   - Review your own code first
   - Write a clear PR description

2. **Creating the PR**
   - Use a descriptive title
   - Link related issues
   - Tag appropriate reviewers
   - Mark as draft if not ready

3. **During Review**
   - Respond to feedback promptly
   - Explain your reasoning when disagreeing
   - Update the PR based on feedback

4. **After Approval**
   - Squash commits if needed
   - Ensure CI is green
   - Merge promptly

### For Reviewers

1. **Initial Response** (within 1 business day)
   - Acknowledge the review request
   - Set expectations on detailed review timing

2. **Detailed Review**
   - Check logic and correctness
   - Look for potential bugs
   - Verify test coverage
   - Consider performance implications
   - Check for security issues

3. **Providing Feedback**
   - Be specific and actionable
   - Distinguish between blocking issues and suggestions
   - Use prefixes: `[blocking]`, `[suggestion]`, `[question]`
   - Provide examples when possible

4. **Follow-up**
   - Re-review after changes
   - Approve when satisfied
   - Help author if they're stuck

## Exceptions

Exceptions to this guideline can be made in the following scenarios:

- **Critical Production Incidents**: Hotfixes may be reviewed post-merge with immediate notification to the team
- **Automated Changes**: Bot-generated dependency updates may use automated approval workflows

**Process for requesting an exception**: Discuss with team lead and document the reason in the PR.

## Related Guidelines

- [Git Commit Message Guidelines](../guidelines/development/commit-messages.md)
- [Testing Standards](../guidelines/development/testing-standards.md)
- [API Design Guidelines](../guidelines/development/api-design.md)

## References

- [Google's Code Review Guidelines](https://google.github.io/eng-practices/review/)
- [Effective Code Reviews](https://mtlynch.io/human-code-reviews-1/)

## Revision History

| Date | Version | Author | Changes |
|------|---------|--------|---------|
| 2026-01-19 | 1.0 | Engineering Team | Initial version |

## Feedback

For questions or suggestions about this guideline, please open an issue in this repository or contact the Engineering Team.
