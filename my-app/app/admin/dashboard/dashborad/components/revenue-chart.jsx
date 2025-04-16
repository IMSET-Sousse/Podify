"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    total: 1800,
  },
  {
    name: "Fév",
    total: 2200,
  },
  {
    name: "Mar",
    total: 2800,
  },
  {
    name: "Avr",
    total: 3200,
  },
  {
    name: "Mai",
    total: 4000,
  },
  {
    name: "Juin",
    total: 4800,
  },
  {
    name: "Juil",
    total: 5200,
  },
  {
    name: "Août",
    total: 5800,
  },
  {
    name: "Sep",
    total: 6400,
  },
  {
    name: "Oct",
    total: 7000,
  },
  {
    name: "Nov",
    total: 7600,
  },
  {
    name: "Déc",
    total: 8378,
  },
]

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `€${value}`}
        />
        <Tooltip formatter={(value) => [`€${value}`, "Revenu"]} labelFormatter={(label) => `Mois: ${label}`} />
        <Bar dataKey="total" fill="#16a34a" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
