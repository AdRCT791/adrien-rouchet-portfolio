import { createFileRoute, Outlet } from '@tanstack/react-router';
import Header from '../../components/Header/Header';

export const Route = createFileRoute('/works/')({
  component: WorksLayout,
});

function WorksLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
