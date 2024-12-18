import { Image } from "@chakra-ui/react";
import styles from "./AchievementsTab.module.scss";
import MoreIcon from "@assets/images/rightArrow.svg?react";

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Меломан",
    image:
      "https://s3-alpha-sig.figma.com/img/91b0/8b97/c53f70797ad2a34cb7a5c8e3c4f65c66?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bb4WjGk55a4AqEb1RZHx7tIdhMJSmzxqf~9WCCh14ltlw1MUEhFV8gBfiBIgvV3PCwgXA2-zYRNYaQNo8DtUPt8QNUPDxreXs6PlFotXH~F6u4d0kmJX1zrqzzrUyE2ky6Faj09~4bOyZX7qXKDGphz6ZCGfeZjO2kOhWMemhs8dhpRI7J7IFGcRYBzWMrw3Y5TktqLSKGmINb0StmP2a7JJSLdZ9x37nA42HL9gUo5KTuPwL66XKEPd4taRsRvg5GCLsYlby~VNvDCiqn7NbXaNZvjjw4ZdzRjB1onyexa1w3UXXMwAjMK3JzQq1BrVOkJOifF9E3~qe12NpDNXWA__",
  },
  {
    id: 2,
    title: "Киноман",
    image:
      "https://s3-alpha-sig.figma.com/img/faf7/3bb3/caac3eed47afb7168750f5e39cfcb732?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-twfsUNYL5E7MDTSE8EJlYpWPxxJjml8zq~M~Kn0dhtFGmClTf7lMkPCiw3WB3KXCvoYjYfmogLC0khgKJtx4EUbfjlaWguoCm~ITMJsz-ndOCWkVoeR-~~l3z8O5mGk1ibEwAFqp3PI0MJYaBAz8xKEYya4ATaD5BHDmZugMytER8jBH14tgi7l-SF~3Vars5v731qNQ9nP-ep-kKm3qjuIzWSgnpVZkiVP~2M0~Gb0M2bJZJgnCaNIw3wvRlDJb94lV0MzenOx0Xur6SbNAfQ9vcMdhQ4VY4eTVxUURXq4kx-a3m86MCzAIU94AW4rnb7wS2-Q4xhob3LqyNbjQ__",
  },
  {
    id: 3,
    title: "50 игр",
    image:
      "https://s3-alpha-sig.figma.com/img/ec10/cee0/5afa9d7a0f49d1f751413f6817693724?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z3oBOPHsVfKNnY51xKTOiRhN6zw5kSKT7wTfM3ynXcX7NtKB4N~AQ4ZSHJ1M1O155F5L2mJJKq3bxAhlcLc~we6cHN5TTkYPS7-Rm6KTrUsINj2wZxh8nPcdDSfnYRykb27s7pcmvVzwKrQzkoDcQF4aeFMqnpZ1CqryZ1ePU0X1qWJMWuCLz4Iv0qg6NmVY~~oyuPSGPvgDLFd4D5~dHVsMcivYy9isLXtTVI~avrDtltNn9OxUN99plaULOT~yOsj37LSk7FuH1PNmQ4mfEYKt4HGuHaq556ulTbtLhFlBFLjjwTPZLDsifha8eVK66erpYPpQMTgNBFwV5VrXyg__",
  },
];

export const AchievementsTab = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <h2>Избранное</h2>
        <button className={styles.ButtonMore}>
          <span>См. все</span>
          <MoreIcon width={16} height={16} />
        </button>
      </div>

      <div className={styles.Grid}>
        {ACHIEVEMENTS.map((item) => (
          <div key={item.id} className={styles.Card}>
            <Image
              rounded="8px"
              src={item.image}
              alt={item.title}
              className={styles.Image}
            />

            <span className={styles.Title}>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
