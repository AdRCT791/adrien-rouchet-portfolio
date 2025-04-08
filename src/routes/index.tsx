import { createFileRoute } from '@tanstack/react-router';
import App from '../components/App/App';
export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return <App />;
}
