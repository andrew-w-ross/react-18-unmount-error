# react-18-unmount-error

Run the following test with `react` and `react-test-renderer` on next and you'll get the following console error:

```
  console.error
    Warning: Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.
    
    Error message:
    
    Error: Boom
```

Doing the same in `latest` won't print the same error.