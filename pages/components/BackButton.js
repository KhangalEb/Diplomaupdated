import { Button, Space } from 'antd';
import { useRouter } from 'next/router';
const BackButton = () => {
    const router = useRouter()
    return (<div className=' mx-auto float-right mr-6 mb-6'><Button onClick={() => router.back()}>Буцах</Button></div>);
}

export default BackButton;