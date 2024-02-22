import { CreateOrganization } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  return (
    <CreateOrganization routing="path" path="/portal/session/new" />
  )
}