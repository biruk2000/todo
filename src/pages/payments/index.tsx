import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

// async function getData() {
//   // const response = await fetch("/api/payments");
//   // const data = (await response.json()) as Payment[];
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "test@example.com",
//     },
//     {
//       id: "728ed52g",
//       amount: 100,
//       status: "pending",
//       email: "wow@example.com",
//     },
//     {
//       id: "723ed52f",
//       amount: 100,
//       status: "pending",
//       email: "two@example.com",
//     },
//   ];
// }

export default function PaymentsPage() {
  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "test@example.com",
    },
    {
      id: "728ed52g",
      amount: 100,
      status: "pending",
      email: "wow@example.com",
    },
    {
      id: "723ed52f",
      amount: 100,
      status: "pending",
      email: "two@example.com",
    },
  ];
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
