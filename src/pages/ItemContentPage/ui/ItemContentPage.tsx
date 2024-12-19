import { useParams } from "react-router";

export const ItemContentPage = () => {
  const { contentId } = useParams();
  return <div>{contentId}</div>;
};
