export default function DataTable() {
  const data = [
    { status: "Success", email: "ken99@example.com", amount: "$316.00" },
    { status: "Success", email: "abe45@example.com", amount: "$242.00" },
    {
      status: "Processing",
      email: "monserrat44@example.com",
      amount: "$837.00",
    },
    { status: "Success", email: "silas22@example.com", amount: "$874.00" },
    { status: "Failed", email: "carmella@example.com", amount: "$721.00" },
  ];
  return (
    <div className="overflow-x-auto rounded-lg shadow bg-white p-4 w-full">
      <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
        <thead>
          <tr className="text-gray-600 font-medium">
        
            
            <th className="flex items-center gap-1">
              Email
              <span>↑</span>
            </th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="bg-gray-50 hover:bg-gray-100 rounded">
              
              <td className="text-sm text-gray-800">{row.email}</td>
              <td className="text-sm font-semibold text-gray-900">
                {row.amount}
              </td>
              <td>
                <button className="text-gray-400 hover:text-black">•••</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
