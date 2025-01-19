import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Outlet, useOutletContext } from "@remix-run/react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const { session } = context;

  // redirect already logged in users to the app experience
  if (!!session?.get("user")) {
    return redirect("/signed-in");
  }

  return json({});
};

export default function () {
  const context = useOutletContext();

  return (
    <div className="w-screen h-screen grid place-items-center">
 
      <div className="flex flex-col items-center gap-8">
        <img
          src="/public/logo_sparkvision.png"
          alt="SparkVision Logo"
          className="h-8 w-auto" />
        <Outlet context={context} />
      </div>
    </div>
  );
}
