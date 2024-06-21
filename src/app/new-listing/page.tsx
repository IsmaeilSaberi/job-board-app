import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";

export default async function NewListingPage() {
  const { user } = await getUser();

  if (!user) {
    return (
      <div className="container">
        <div>You need to be logged in to post a job</div>;
      </div>
    );
  }

  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  const organizationMemberships =
    await workos.userManagement.listOrganizationMemberships({
      userId: user.id,
    });

  return (
    <div className="container">
      <div>
        <pre>{JSON.stringify(organizationMemberships, null, 2)}</pre>
        <h2 className="text-lg mt-6">Your companies</h2>
        <p className="text-gray-500 text-sm mb-2">
          select a company to create a job add for
        </p>
        <div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
          No companies found assigned to your user
        </div>

        <h2 className="text-lg mt-6">Create a new company</h2>
        <p className="text-gray-500 text-sm mb-2">
          To create a job listing you first need to register a company
        </p>
        <form action="" className="flex gap-2">
          <input
            type="text"
            className="p-2 border border-gray-400 rounded-md"
            placeholder="company name"
          />
          <button className="flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md">
            Create company{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
