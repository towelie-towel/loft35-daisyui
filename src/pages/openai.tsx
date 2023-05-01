import Head from 'next/head';
// import { type InferGetServerSidePropsType } from "next";
import Layout from '~/layout/Layout';
// import { openai } from '~/utils/openai';

/* export const getServerSideProps = async () => {
    const res = await openai.listModels();
    console.log(res);
    return {
        props: {
            openaiModels: {
                models: res.data,
            },
        },
    };
} */

//const Openai: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ openaiModels }) => {
const Openai = () => {

    // console.log(openaiModels)

    return (
        <>
            <Head>
                <title>Loft 35 - Openai</title>
                <meta name="description" content="Loft-35 Store" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="w-full flex items-center justify-center h-full">
                    <svg
                        fill="currentColor"
                        height="80px"
                        width="80px"
                        version="1.2"
                        baseProfile="tiny"
                        id="progress"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        xmlSpace="preserve"
                    >
                        <circle id="_x33_" cx="114.5" cy="42.7" r="21.7" />
                        <path
                            id="_x32__12_"
                            d="M34.9,152.5l-0.2-0.2l0,0c-0.9-0.6-1.7-1.1-2.4-1.9l2.4,27.5L4.5,220.7c-4.3,6.2-2.8,14.6,3.2,18.9
	c6.2,4.3,14.6,2.8,18.9-3.2l32.6-47c1.7-2.4,2.8-5.6,2.4-8.8l-1.1-13.3L34.9,152.5z"
                        />
                        <path
                            id="_x31__15_"
                            d="M124.6,242h129.4l-24.2-75.5c0,0-13.7,3.4-40.8,32.2c-0.6,0.6-1.3,1.3-1.9,1.9l-65.4-37.8
	c1.1-2.1,1.3-4.5,0.9-7.1l-23.2-86c-1.9-8.4-9.4-14.8-18.2-14.8H37.9c-3.2,0-6.4,1.7-8.2,4.5L8.1,96.9c-2.8,4.5-1.1,10.3,3.4,12.9
	l24.2,13.9l-3.2,5.4c-3.9,6.4-1.7,14.6,4.9,18.2l54.3,31.3v49.6c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-56.6l60.1,34.8
	c-12.4,7.1-26.6,8.4-36.7,14.4C129.7,228.2,124.6,242,124.6,242z M40.3,115.8l-15.9-9.2l0,0L43.3,74h21.2L40.3,115.8z M75.2,136
	l15-26.2l11.2,41.2L75.2,136z"
                        />
                    </svg>
                    <h2 className="card-title">Esta parte está en construcción</h2>
                </div>
            </Layout>
        </>
    );
};

export default Openai;
