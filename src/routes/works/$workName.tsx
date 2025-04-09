import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/works/$workName')({
  component: WorkComponent,
});

function WorkComponent() {
  const { workName } = Route.useParams();
  return <div>Hello "/works/{workName}"!</div>;
}
