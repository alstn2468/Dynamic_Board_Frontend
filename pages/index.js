import Header from '../components/Header';
import Link from 'next/link';

function Index() {
    return (
        <div>
            <Header />
            <h1>Hello World!</h1>
            <Link href="/about">
                <a>ABOUT</a>
            </Link>
            <h2>process.env.TEST = {process.env.TEST}</h2>
        </div>
    );
}

export default Index;
