import SavedList from "@/app/components/SavedList";
import { getAllItems } from "@/lib/rss/getAllItems";

const SavedPage = async () => {
  const items = await getAllItems();
  return (
    <>
      <main className="p-6">
        <SavedList items={items} />
      </main>
    </>
  );
};

export default SavedPage;
