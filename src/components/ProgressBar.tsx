import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

interface Props {
  value: any
}

export default function ProgressBar({value}: Props) {
  return (
    <Box
      sx={{
        width: "90%",
      }}
    >
      <LinearProgress
        sx={{
          borderRadius: "2px",
        }}
        value={value}
        variant="determinate"
      />
    </Box>
  );
}
