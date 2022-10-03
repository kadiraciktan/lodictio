import Document, { Html, Head, Main, NextScript } from 'next/document';
import { HeaderComponent } from '../components';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <HeaderComponent></HeaderComponent>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
