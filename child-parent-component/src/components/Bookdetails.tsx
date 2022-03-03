import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccessTime from "@mui/icons-material/AccessTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Bookdetils() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        paddingLeft: "12px",
        paddingRight: "12px",
        paddingTop: "23px",
        textAlign: "right",
      }}
    >
      <Typography
        style={{
          fontFamily: "Sans Serif",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "bold",
          lineHeight: "23px",
          letterSpacing: "0em",
          textAlign: "left",
          color: "#03314B",
          paddingBottom: "8px",
        }}
      >
        Beyond Entrepreneurship
      </Typography>
      <Typography
        style={{
          fontFamily: "Sans Serif",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "500px",
          lineHeight: "20px",
          letterSpacing: "0em",
          textAlign: "left",
          color: "#6D787E",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        Jim Collins & Bill Lazier
      </Typography>
      <Typography
        style={{
          fontFamily: "Sans Serif",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "normal",
          lineHeight: "18px",
          letterSpacing: "0em",
          textAlign: "left",
          color: "#6D787E",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        <AccessTime
          style={{
            height: "18px",
            width: "18px",
            verticalAlign: "sub",
            paddingRight: "3px",
          }}
        />
        13-minute read
      </Typography>

      <MoreHorizIcon
        style={{
          color: "#042330",
        }}
      />
    </Box>
  );
}
