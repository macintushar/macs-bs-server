import { NextResponse } from "next/server";

const message = `
Hi, I'm generating a chart below.

<chart>
{
  config: {
    meta: {
      title: "Chart Title",
      description: "Optional description",
      type: "line",
    },
    config: {
      colors: ["#ff0000", "#00ff00"],
      height: 400,
      xAxis: {
        key: "date",
        type: "date",
        dateFormat: "MMM d",
        tickCount: 5,
      },
      yAxis: {
        label: "Sales",
        includeZero: true,
        format: "$#,##0.00",
      },
    },
    series: [
      {
        id: "series1",
        label: "Series 1",
        dataKey: "sales",
        color: "#ff0000",
      },
    ],
    data: [
      { date: "2025-01-01", sales: 100 },
      { date: "2025-01-02", sales: 150 },
    ],
  },
};
</chart>
`;

export async function GET() {
  return NextResponse.json({ message });
}

export async function POST() {
  return NextResponse.json({ message });
}
