import { useQuery } from "@tanstack/react-query";

function Row({ label, value }: { label: string; value: string | undefined }) {
  return (
    <tr>
      <td style={{ padding: "1rem" }}>{label}</td>
      <td style={{ padding: "1rem" }}>
        <code>{value}</code>
      </td>
    </tr>
  );
}

function App() {
  const query = useQuery({
    queryKey: ["projects"],
    queryFn: () => fetch("/projects"),
    retry: false,
  });

  return (
    <table style={{ fontSize: 32, margin: "2rem" }}>
      <tbody>
        <Row label="Status" value={query.status} />
        <Row label="Error" value={query.error?.message} />
      </tbody>
    </table>
  );
}

export default App;
