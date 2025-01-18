import { useOutletContext } from "@remix-run/react";
import type { AuthOutletContext } from "./_auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "../api";
import { useFindMany } from "@gadgetinc/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

 
export default function AlertsPage() {
  const { gadgetConfig, user } = useOutletContext<AuthOutletContext>();
  const [{ data, fetching, error }] = useFindMany(api.alertHistory, {
    sort: { timestamp: "Descending" },
    select: {
      id: true,
      timestamp: true,
      description: true,
    },
  });

  return (
    <div className="container mx-auto py-6"> 
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Alert History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            {fetching && (
              <div className="text-gray-500 py-4">Loading...</div>
            )}
            {error && (
              <div className="text-red-500 py-4">
                Error loading alerts: {error.message}
              </div>
            )}
            {data && (
              <div className="border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center text-gray-500">No alerts to display</TableCell>
                      </TableRow>
                    ) : (
                      data.map((alert) => (
                        <TableRow key={alert.id}>
                          <TableCell>{alert.id}</TableCell>
                          <TableCell>{new Date(alert.timestamp).toLocaleString()}</TableCell>
                          <TableCell>{alert.description}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
