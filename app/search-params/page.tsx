export default async function Page(props: {
  searchParams?: Promise<{
    foo?: string;
  }>;
}) {
    const searchParams = await props.searchParams;
    const fooValue = searchParams?.foo;
    return <p>Seach params: foo={fooValue}</p>
}
