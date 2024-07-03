import { redirect } from "next/navigation";

function SearchInput() {
  async function searchAction(formData: FormData) {
    "use server";

    const searchTerm = formData.get("searchTerm") as string;

    redirect(`/search/${searchTerm}`);
  }

  return (
    <form
      action={searchAction}
      className="w-full flex items-center px-5 rounded-full border-white bg-white border shadow-lg"
    >
      <input
        type="text"
        className="flex-1 p-5 outline-none text-black"
        name="searchTerm"
        placeholder="What type of film do you like? e.g. Sci-Fi films in space..."
      />
    </form>
  );
}

export default SearchInput;
