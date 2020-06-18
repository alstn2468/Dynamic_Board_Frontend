import Header from "../components/Header";

function About(props) {
    return (
        <div>
            <Header />
            <h2>This is about pages.</h2>
            <h3>This page excute at {props.from}</h3>
        </div>
    );
}

About.getInitialProps = async ({ req }) => {
    return req ? { from: "server" } : { from: "client" };
};

export default About;
