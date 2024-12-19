import { useNavigate, useParams } from "react-router";
import styles from "./AllItemsTab.module.scss";
import { CategoryCard } from "@/shared";

const items = [
  {
    id: "DunePartTwo",
    title: "Дюна: Часть вторая",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/eaba/8aad/473b02254d8255dbe4c61cc5f698eceb?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ATOCUeWUeoYiDzPAt2l5t6pYPkcFCQGn~ljhA3lJMc~7Xhq6tCqAqj4VqaYqtVCB1ZT5WyqF69u48f-Yck0H3v42ufY~mBy-5kAhjyzFCtwdyUogF4Qh9KejHy6qZbRqndXrVqqBmWmrIA80QW6woxhomCdBGC~q0x63Kj1Q2IaahTG8KyNLRMfyDcSypw3hsq5guPKdMpvF-HGaa27fivjyefhNkIDmId~y9UbfMDk22j2Rl0O6DwqNwfWY23utXS5sVl~U~Yfmunpo0jIVCAVKnh73YoQjKjVEl1TNcWqkzhpAFnQveri6b-cwtuz5dSZk7zqG370CwhPZlYE66g__",
  },
  {
    id: "Deadpool3",
    title: "Дэдпул и Росомаха",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/0dd1/b620/a39de4038f679b57aef324fd2084a631?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jIkkPK0D9R81O~KAeKfukaP7St~-6N3LSC1jO7qzhDMZCOL5vCeLkPEevikIXpwJwzm3yZ1ctabBqy1ustNYTbhJDb27gOxIy4mpfPb5XPrO1q-PcXaujkQLjfL~64DkrfG0MIpun9I5epymEX3g3W2wX0IboH0N67qcrt5AEJKsvBP2liFicKg-yCGfuB~ZToWoJjbXs2x8Ch80v8YLq9BN3KS~KcRfSP4573-RFWyHeRSbdVMxHa2WKgltzSf2gT2a0Q-RRITlv8513-PCGUDRikT5bSIWILM6czkvxTzEOfuYPDM2AjldMsVmyYTgIiZqJimK1Kiaw0mFXg1Yow__",
  },
];

export const AllItemsTab = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const onClickCard = (itemId: string) => {
    navigate(`/${category}/allItems/${itemId}`);
  };

  return (
    <div className={styles.Container}>
      {items.map((elem, index) => (
        <CategoryCard
          key={index}
          title={elem.title}
          imageUrl={elem.imageUrl}
          onClick={() => onClickCard(elem.id)}
        />
      ))}
    </div>
  );
};
