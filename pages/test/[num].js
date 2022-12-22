import {Test} from "../../components/pages/Test";
import {useRouter} from "next/router";


export default function Num({ tests }) {

    const router = useRouter();
    const { num } = router.query;

    return (
        <Test test={ tests }/>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/hello');
    const data = await response.json();

    return { props: { tests: data } }
}