# Release Evidence Contract

Every automatic release must produce an evidence record binding:

- source commit SHA
- validated UI CI workflow run and conclusion
- package version
- release tag
- exact tagged commit SHA
- GitHub Release identity
- relevant upstream Visual System compatibility fingerprint

The evidence record is verification output, not a second source of truth. It should be attached to the release PR/issue and retained as CI artifact where practical.

A release is not considered attested merely because a workflow succeeded; the source SHA, tag and published version must resolve to the same release chain.
