import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function ProgressBar({ progessBarStatus }) {
  const categories = ["IDEALISTIC", "DISILLUSIONED", "CYNICAL", "HOPEFUL"];

  // Log the incoming object to ensure it's being received correctly
  console.log('progressBarStatus:', progessBarStatus);

  // Create a mapping for the progress values
  const progressMapping = {
    IDEALISTIC: progessBarStatus && progessBarStatus.one || 0,
    DISILLUSIONED: progessBarStatus && progessBarStatus.two || 0,
    CYNICAL: progessBarStatus && progessBarStatus.three || 0,
    HOPEFUL: progessBarStatus && progessBarStatus.four || 0
  };

  // Log the progressMapping to check the values
  console.log('progressMapping:', progressMapping);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "80%",
        marginLeft: "10%",
        marginTop: "4%",
      }}
    >
      {categories.map((category) => (
        <Box key={category} sx={{ width: "24%" }}>
          <LinearProgress 
          variant="determinate" 
          sx={{
            height: 10, // Adjust the thickness here
            backgroundColor: "rgba(32, 173, 180, 0.2)", // Lighter background color for better visibility
            '& .MuiLinearProgress-bar': {
              borderRadius: 5,
              backgroundColor: "rgb(32, 173, 180)", // Same color as the heading
            },
            borderRadius: 5
          }}
          value={(progressMapping[category] / 3) * 100} 
          />
          <h2 style={{ color: "rgb(32, 173, 180)" }}>{category}</h2>
        </Box>
      ))}
    </Box>
  );
}
