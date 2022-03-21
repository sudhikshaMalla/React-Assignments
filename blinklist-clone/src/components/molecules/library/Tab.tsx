import { COLORS } from "../../../constants";
import BodySubtitle from "../../atoms/BodySubtitle/BodySubtitle";

type TabProps = {
  text: string;
  isSet: boolean;
};

export default function Tab(props: TabProps) {
  let textColor = COLORS.GREY;
  let borderColor = COLORS.GRAY;
  if (props.isSet === true) {
    textColor = COLORS.GREEN;
    borderColor = COLORS.BRIGHT_GREEN;
  }
  return (
    <div
      style={{
        height: "23px",
        width: "350px",
        margin: "0px",
        padding: "5px",
        borderBottom: "2px solid " + borderColor,
        textAlign: "left",
        color: textColor,
      }}
    >
      <BodySubtitle text={props.text} className="Tab" />
    </div>
  );
}
