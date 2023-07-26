import { getPageById, getPages } from "@/app/utils/dataFetching";
import { SectionInterface } from "@/app/interface/SectionInterface";
import { MenuItemInterface } from "@/app/interface/MenuItemInterface";
import Section from "@/app/Section";

export default async function Home() {
  const menuItems = await getPages();
  const itemData = await getPageById(
    menuItems.find((el: MenuItemInterface) => el.url === "/").id,
  );
  return (
    <>
      {itemData.sections.map((section: SectionInterface) => (
        <Section section={section} key={section.type} />
      ))}
    </>
  );
}
