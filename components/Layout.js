import Head from "next/head";
import Navbar from './Navbar';

const layout = (props) => (
    <div>
        <Head>
            <link rel="stylesheet" href="https://moengage.com/assets/css/style.css" />
            <title>Nextjs</title>
        </Head>
        <Navbar />
        {props.children}
    </div>
)

export default layout;