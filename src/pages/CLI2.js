import React, { useState } from 'react'
import axios from 'axios'
// import logo from './logo.png'
import { TextField, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '10px 10%'
  },
  el: {
    width: '100%',
    padding: '5px 0px'
  },
  text: {
    width: '100%',
    padding: '0px 0px'
  }
});

export default function CLI2(props) {
  const classes = useStyles()
  const [state, setState] = useState({
    req: props.placeholder,
    res: '',
    liveError: false,
    error: ''
  })
  const [command, setCommand] = useState({
    name: 'calc'
  })

  const handleKey = (event) => {
    if (event.nativeEvent.key === 'Enter' && event.target.value !== '') {
      setState({ liveError: false })

      axios.get(`https://polycalculatorbot.com/api/${command.name}?a=${event.target.value}`)
        .then(res => {
          const { data } = res
          if (data.error) {
            return setState({
              req: '',
              liveError: true,
              error: data.error
            })
          }
          console.log(data)

          const formattedRes = [event.target.value, 'Attackers: beforehp ➔ afterhp']

          data.attackers.forEach((attacker, index) => {
            formattedRes.push(`   ${index + 1}. ${attacker.name}: ${attacker.beforehp} ➔ ${attacker.afterhp}`)
          })

          formattedRes.push(`${data.defender.name}: ${data.defender.currenthp} ➔ ${data.defender.afterhp}`)
          formattedRes.push('')

          setState({
            req: '',
            res: `${formattedRes.join('\n')}\n${state.res}`
          });
          event.target.value = ''
        })
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant='h4'>
        Discord-like PolyCalculator
      </Typography>
      <Box className={classes.el}>
        <TextField
          id="outlined-multiline-static"
          fullWidth={true}
          label="Command"
          placeholder={state.req}
          variant="outlined"
          autoFocus={true}
          error={state.liveError}
          helperText={state.error}
          onKeyPress={handleKey}
        />
      </Box>
      <Box className={classes.el}>
        <TextField
          className={classes.text}
          id="outlined-multiline-static"
          fullWidth={true}
          label=""
          disabled
          multiline
          rows={14}
          variant="outlined"
          value={state.res}
        />
      </Box>
    </Box >
  )
}
