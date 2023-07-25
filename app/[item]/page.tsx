import {getPageById, getPages} from "@/app/utils/dataFetching";
import Section from "@/app/Section";
import {SectionInterface} from "@/app/interface/SectionInterface";
import {MenuItemInterface} from "@/app/interface/MenuItemInterface";

interface ItemDetailProps {
  params: {
    item: MenuItemInterface
}
}
export default async function ItemDetail({ params } : ItemDetailProps) {
  const { item } = params;
  const menuItems = await getPages();
  const itemData = await getPageById(menuItems.find((el: MenuItemInterface) => el.url === '/' + item).id);
  return (
      <>
        {itemData.sections.map((section: SectionInterface) => (
              <Section section={section} key={section.type} />
          ))}
      </>
  )
}
