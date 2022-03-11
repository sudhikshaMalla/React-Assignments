import { Stack } from "@mui/material";
import ReadingTime from "../ReadingTime/ReadingTime";
import ReadCount from "../ReadCount/ReadCount";

type ReadDetailsProps = {
  time: number;
  count: string;
};

export default function ReadDetails(props: ReadDetailsProps) {
  if (props.count === "") {
    return <ReadingTime val={props.time} />;
  }
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <ReadingTime val={props.time} />
      <ReadCount val={props.count} />
    </Stack>
  );
}
