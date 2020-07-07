import Head from 'next/head'

const Home = () => (
  <>
    <Head>
      <title>One Thing</title>
      <meta name='author' content='Stephen Weiss'></meta>
      <meta
        name='description'
        content='An app that aims to help you do one thing daily through the combination of an intuitive interface and timely reminders'
      ></meta>
      <link rel='shortcut icon' href='favicon.ico' type='image/x-icon'></link>
      <meta charSet='utf-8'></meta>
    </Head>
    <div>Hello, world</div>
  </>
)

export default Home
