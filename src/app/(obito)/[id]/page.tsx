import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function Detail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const userId = (await params).id
  return (
    <Card>
      <CardHeader>
        <CardTitle>Item Details</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{userId}</p>
      </CardContent>
    </Card>
  );
}
