import { ApplicationLayout } from '@/app/(wifi)/application-layout'

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ApplicationLayout>
      {children}
    </ApplicationLayout>
  )
}
