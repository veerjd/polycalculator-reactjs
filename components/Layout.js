import Head from "next/head";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import styles from "@/styles/Layout.module.css";

export default function Layout({ children }) {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <ThemeProvider theme={darkTheme}>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/logo192.png" />
          </Head>
          {children}
        </ThemeProvider>
      </div>
    </div>
  );
}
