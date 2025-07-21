import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <main className="my-16 md:my-20 flex items-center justify-center">
      <SignIn />
    </main>
  );
};

export default page;
