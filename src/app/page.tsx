import FAIcon from "@/components/FAIcon";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <FAIcon icon={faThumbsUp} />
    </div>
  );
}
