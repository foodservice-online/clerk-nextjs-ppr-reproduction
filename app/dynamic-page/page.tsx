import { auth } from "@clerk/nextjs/server";

export default async function Page() {
    const { userId, isAuthenticated } = await auth();

    if (isAuthenticated) {
        return (
            <div>
                <h1>Home Page</h1>
                <p>Welcome, user {userId}!</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>You are not signed in.</p>
        </div>
    );
}
