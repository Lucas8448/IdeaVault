"use client"

import { OrganizationList } from "@clerk/nextjs";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <OrganizationList
          afterCreateOrganizationUrl={org => `/portal/session/${org.slug}`}
          afterSelectPersonalUrl={user => `/portal/session/${user.id}`}
          afterSelectOrganizationUrl={org => `/portal/session/${org.slug}`}
      />
    </div>
  );
}
