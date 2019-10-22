export const Details = ({ children, summary }) => (
  <details>
    <summary>{summary}</summary>
    {children}
  </details>
)
