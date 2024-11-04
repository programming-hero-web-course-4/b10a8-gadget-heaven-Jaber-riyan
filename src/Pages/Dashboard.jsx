/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Dashboard = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Dashboard || GadgetHeaven ✨</title>
                    <link rel="canonical" href="http://localhost:5173/dashboard" />
                </Helmet>
            </HelmetProvider>
            <h1>Hello World</h1>
        </>
    );
};



export default Dashboard;
