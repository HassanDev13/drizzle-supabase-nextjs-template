import { SelectUsers } from "@/db/Queries";
import Form from "@/ui/Form";
import ListView from "@/ui/List";

export default async function Home() {
  const userData = await SelectUsers();
  return (
    <main
      className={"relative h-screen flex justify-center items-center flex-col"}
    >
      <h1>DRIZZLE SUPABASE NEXTJS TEMPLATE</h1>
      <div className={"flex flex-col"}>
        <Form />
        {userData.map((d) => (
          <ListView key={d.id} id={d.id} email={d.email} />
        ))}
      </div>
    </main>
  );
}
