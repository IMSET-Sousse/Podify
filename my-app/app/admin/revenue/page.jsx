"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Download, Calendar } from "lucide-react"

const revenueData = [
  { month: "Jan", abonnements: 2500, dons: 1200, total: 3700 },
  { month: "Fév", abonnements: 2700, dons: 1300, total: 4000 },
  { month: "Mar", abonnements: 2900, dons: 1500, total: 4400 },
  { month: "Avr", abonnements: 3100, dons: 1600, total: 4700 },
  { month: "Mai", abonnements: 3300, dons: 1800, total: 5100 },
  { month: "Juin", abonnements: 3500, dons: 2000, total: 5500 },
  { month: "Juil", abonnements: 3700, dons: 2200, total: 5900 },
  { month: "Août", abonnements: 3900, dons: 2400, total: 6300 },
  { month: "Sep", abonnements: 4100, dons: 2600, total: 6700 },
  { month: "Oct", abonnements: 4300, dons: 2800, total: 7100 },
  { month: "Nov", abonnements: 4500, dons: 3000, total: 7500 },
  { month: "Déc", abonnements: 4700, dons: 3200, total: 7900 },
]

const revenueDistribution = [
  { name: "Abonnements Premium", value: 65 },
  { name: "Dons aux créateurs", value: 25 },
  { name: "Publicités", value: 10 },
]

const COLORS = ["#16a34a", "#3b82f6", "#f97316"]

const transactions = [
  {
    id: "t1",
    date: "16/04/2025",
    user: "Sophie Martin",
    type: "Abonnement Premium",
    amount: "€9.99",
    status: "Réussi",
  },
  {
    id: "t2",
    date: "15/04/2025",
    user: "Thomas Dubois",
    type: "Don",
    amount: "€15.00",
    status: "Réussi",
  },
  {
    id: "t3",
    date: "15/04/2025",
    user: "Julie Leroy",
    type: "Abonnement Premium",
    amount: "€9.99",
    status: "Réussi",
  },
  {
    id: "t4",
    date: "14/04/2025",
    user: "Nicolas Bernard",
    type: "Don",
    amount: "€5.00",
    status: "Réussi",
  },
  {
    id: "t5",
    date: "14/04/2025",
    user: "Marie Petit",
    type: "Abonnement Premium",
    amount: "€9.99",
    status: "Échoué",
  },
]

export default function RevenuePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Revenus</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Avril 2025
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenu Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€7,900</div>
            <p className="text-xs text-muted-foreground">+€400 (5.3%) par rapport au mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Abonnements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€4,700</div>
            <p className="text-xs text-muted-foreground">+€200 (4.4%) par rapport au mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€3,200</div>
            <p className="text-xs text-muted-foreground">+€200 (6.7%) par rapport au mois dernier</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="creators">Revenus des créateurs</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenus Mensuels</CardTitle>
              <CardDescription>Évolution des revenus sur les 12 derniers mois</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `€${value}`} />
                  <Tooltip formatter={(value) => [`€${value}`, ""]} />
                  <Legend />
                  <Bar dataKey="abonnements" name="Abonnements" fill="#16a34a" />
                  <Bar dataKey="dons" name="Dons" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Répartition des Revenus</CardTitle>
                <CardDescription>Sources de revenus de la plateforme</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={revenueDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {revenueDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, ""]} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tendance des Abonnements</CardTitle>
                <CardDescription>Évolution du nombre d'abonnés premium</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="abonnements"
                      name="Revenus Abonnements"
                      stroke="#16a34a"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Transactions Récentes</CardTitle>
                <CardDescription>Liste des dernières transactions sur la plateforme</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les types</SelectItem>
                    <SelectItem value="subscription">Abonnements</SelectItem>
                    <SelectItem value="donation">Dons</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Exporter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Utilisateur</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Montant</TableHead>
                    <TableHead>Statut</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.user}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            transaction.status === "Réussi" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {transaction.status}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="creators" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenus des Créateurs</CardTitle>
              <CardDescription>Répartition des revenus entre les créateurs de contenu</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Graphiques de revenus des créateurs à implémenter</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
