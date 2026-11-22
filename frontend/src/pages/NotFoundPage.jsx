import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="panel" data-testid="not-found">
      <h2>Page Not Found</h2>
      <p className="info">The requested URL does not exist.</p>
      <Link to="/">Back to catalog</Link>
    </section>
  );
}