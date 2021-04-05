const { Typography } = require("@material-ui/core");

export default function Result({
  result
}) {
  return (
    <Typography component="p">
      {JSON.stringify(result)}
    </Typography>
  )
}