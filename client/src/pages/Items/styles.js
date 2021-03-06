const styles = theme => ({
  container: {
    background: theme.palette.bg.main,
    padding: '5%',

    [theme.breakpoints.up('md')]: {
      padding: '6%'
    }
  }
});

export default styles;
