import { useRouter } from 'next/router';

export default function Country() {
    const router = useRouter();
    const { domain } = router.query;

    return (
        <div className="min-h-screen py-12 flex flex-col items-center text-white">
            {domain ? (
                <h1>{domain}</h1>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
