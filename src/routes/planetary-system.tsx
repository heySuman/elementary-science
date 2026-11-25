import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/planetary-system')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/planetary-system"!</div>
}
