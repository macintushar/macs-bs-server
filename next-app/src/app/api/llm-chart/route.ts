import { NextResponse } from "next/server";

const data = {
  data: [
    {
      parent_asin: "B07VX8C17P",
      week: "2024-10-21",
      total_sales: 148.45,
    },
    {
      parent_asin: "B07VX8C17P",
      week: "2024-10-28",
      total_sales: 239.92,
    },
    {
      parent_asin: "B09D8KBQW5",
      week: "2024-10-21",
      total_sales: 25.0,
    },
    {
      parent_asin: "B09D8KBQW5",
      week: "2024-10-28",
      total_sales: 25.0,
    },
    {
      parent_asin: "B0C61PWPK9",
      week: "2024-10-21",
      total_sales: 298.75,
    },
    {
      parent_asin: "B0C61PWPK9",
      week: "2024-10-28",
      total_sales: 725.0,
    },
    {
      parent_asin: "B0C61RPHQJ",
      week: "2024-10-21",
      total_sales: 298.75,
    },
    {
      parent_asin: "B0C61RPHQJ",
      week: "2024-10-28",
      total_sales: 525.0,
    },
    {
      parent_asin: "B0C8DHN6L3",
      week: "2024-10-21",
      total_sales: 50.0,
    },
    {
      parent_asin: "B0C8DHN6L3",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0D6WS6LS2",
      week: "2024-10-21",
      total_sales: 99.96,
    },
    {
      parent_asin: "B0D6WS6LS2",
      week: "2024-10-28",
      total_sales: 124.95,
    },
    {
      parent_asin: "B0D71DLGSN",
      week: "2024-10-21",
      total_sales: 47.96,
    },
    {
      parent_asin: "B0D71DLGSN",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0D71HHGYD",
      week: "2024-10-21",
      total_sales: 59.98,
    },
    {
      parent_asin: "B0D71HHGYD",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DBRJLSD3",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DBRJLSD3",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DBRK6ZVG",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DBRK6ZVG",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DBRL6XGJ",
      week: "2024-10-21",
      total_sales: 916.71,
    },
    {
      parent_asin: "B0DBRL6XGJ",
      week: "2024-10-28",
      total_sales: 762.99,
    },
    {
      parent_asin: "B0DBRS8G19",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DBRS8G19",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DFJH4KZ3",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DFJH4KZ3",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DFJL8W41",
      week: "2024-10-21",
      total_sales: 469.82,
    },
    {
      parent_asin: "B0DFJL8W41",
      week: "2024-10-28",
      total_sales: 999.61,
    },
    {
      parent_asin: "B0DG6C1JMW",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DG6C1JMW",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DG6P878C",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DG6P878C",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DG6S1RBD",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DG6S1RBD",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DGH4M9C3",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DGHNBDR7",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DGRDFDPS",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DGRSVFLT",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DGRSVFLT",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DGRXY19Y",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DHJ2SZ97",
      week: "2024-10-21",
      total_sales: 89.96,
    },
    {
      parent_asin: "B0DHJ2SZ97",
      week: "2024-10-28",
      total_sales: 24.99,
    },
    {
      parent_asin: "B0DHJ5VW3Q",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DHJ5VW3Q",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DHJ6NL8H",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DHJ7R3WP",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DHJ7R3WP",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DHJ7R3WR",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DHJ8MTNT",
      week: "2024-10-21",
      total_sales: 159.98,
    },
    {
      parent_asin: "B0DHJ8MTNT",
      week: "2024-10-28",
      total_sales: 79.99,
    },
    {
      parent_asin: "B0DHJCVTTR",
      week: "2024-10-28",
      total_sales: 49.98,
    },
    {
      parent_asin: "B0DHJDH9Q8",
      week: "2024-10-21",
      total_sales: 299.94,
    },
    {
      parent_asin: "B0DHJDH9Q8",
      week: "2024-10-28",
      total_sales: 99.98,
    },
    {
      parent_asin: "B0DHJL53KP",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DHJL53KP",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DHLJTL4K",
      week: "2024-10-21",
      total_sales: 23.98,
    },
    {
      parent_asin: "B0DHLJTL4K",
      week: "2024-10-28",
      total_sales: 35.97,
    },
    {
      parent_asin: "B0DK5Y3DWD",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK5Y3DWD",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK5YMNTX",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK5Z5CSP",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK5Z5CSP",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK5ZB8BF",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK5ZB8BF",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK5ZC6PP",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK618Y49",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK61KCD8",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK61KCD8",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK61Z31J",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK61Z31J",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK622NQS",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DK62NRFN",
      week: "2024-10-21",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DKQ3CX9L",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DKQ5R8KC",
      week: "2024-10-28",
      total_sales: 0.0,
    },
    {
      parent_asin: "B0DKQP7YS4",
      week: "2024-10-28",
      total_sales: 0.0,
    },
  ],
  x_axis: "week",
  y_axis: "total_sales",
  groups: [{ name: "parent_asin", color: "#8884d8" }],
};

const response = `
<chart>
${JSON.stringify(data)}
</chart>
The chart shows the Weekly Sales Trend by ASIN.
`;

export async function GET() {
  return NextResponse.json({ data: response });
}

export async function POST() {
  return NextResponse.json({ data: response });
}
