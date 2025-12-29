import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Monitor,
  Smartphone,
  Tablet,
  Search,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";

// Mock data
const visitors = [
  {
    id: 1,
    ip: "192.168.1.***",
    country: "United States",
    city: "New York",
    device: "Desktop",
    browser: "Chrome 120",
    os: "Windows 11",
    pages: ["/", "/projects", "/contact"],
    referrer: "google.com",
    duration: "3m 45s",
    timestamp: "2024-12-27 10:23:45",
    isOnline: true,
  },
  {
    id: 2,
    ip: "10.0.0.***",
    country: "Germany",
    city: "Berlin",
    device: "Mobile",
    browser: "Safari 17",
    os: "iOS 17",
    pages: ["/"],
    referrer: "Direct",
    duration: "1m 12s",
    timestamp: "2024-12-27 10:20:30",
    isOnline: true,
  },
  {
    id: 3,
    ip: "172.16.0.***",
    country: "Japan",
    city: "Tokyo",
    device: "Desktop",
    browser: "Firefox 121",
    os: "macOS Sonoma",
    pages: ["/", "/about", "/skills", "/projects"],
    referrer: "linkedin.com",
    duration: "5m 23s",
    timestamp: "2024-12-27 10:15:22",
    isOnline: false,
  },
  {
    id: 4,
    ip: "192.168.2.***",
    country: "Brazil",
    city: "São Paulo",
    device: "Mobile",
    browser: "Chrome 120",
    os: "Android 14",
    pages: ["/contact"],
    referrer: "github.com",
    duration: "0m 45s",
    timestamp: "2024-12-27 10:10:15",
    isOnline: false,
  },
  {
    id: 5,
    ip: "10.10.10.***",
    country: "United Kingdom",
    city: "London",
    device: "Tablet",
    browser: "Safari 17",
    os: "iPadOS 17",
    pages: ["/", "/projects"],
    referrer: "twitter.com",
    duration: "2m 18s",
    timestamp: "2024-12-27 10:05:00",
    isOnline: false,
  },
  {
    id: 6,
    ip: "172.20.0.***",
    country: "Canada",
    city: "Toronto",
    device: "Desktop",
    browser: "Edge 120",
    os: "Windows 10",
    pages: ["/", "/about"],
    referrer: "google.com",
    duration: "1m 56s",
    timestamp: "2024-12-27 09:55:30",
    isOnline: false,
  },
  {
    id: 7,
    ip: "192.168.5.***",
    country: "Australia",
    city: "Sydney",
    device: "Mobile",
    browser: "Chrome 120",
    os: "Android 13",
    pages: ["/projects", "/contact"],
    referrer: "Direct",
    duration: "2m 10s",
    timestamp: "2024-12-27 09:45:12",
    isOnline: false,
  },
  {
    id: 8,
    ip: "10.20.30.***",
    country: "France",
    city: "Paris",
    device: "Desktop",
    browser: "Chrome 120",
    os: "macOS Ventura",
    pages: ["/", "/skills", "/projects", "/experience"],
    referrer: "linkedin.com",
    duration: "6m 30s",
    timestamp: "2024-12-27 09:30:45",
    isOnline: false,
  },
];

function getDeviceIcon(device: string) {
  switch (device) {
    case "Mobile":
      return Smartphone;
    case "Tablet":
      return Tablet;
    default:
      return Monitor;
  }
}

export function Visitors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredVisitors = visitors.filter(
    (visitor) =>
      visitor.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visitor.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      visitor.browser.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredVisitors.length / itemsPerPage);
  const onlineCount = visitors.filter((v) => v.isOnline).length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Visitors</h1>
          <p className="text-muted-foreground">
            Track and analyze your site visitors.
            <Badge variant="secondary" className="ml-2">
              {onlineCount} online now
            </Badge>
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Filters */}
      <Card className="hover:border-primary/50">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by location, browser..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Visitors Table */}
      <Card className="hover:border-primary/50">
        <CardHeader>
          <CardTitle>All Visitors ({filteredVisitors.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full ">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Visitor
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Device
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Pages
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Referrer
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Duration
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Time
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredVisitors.map((visitor) => {
                  const DeviceIcon = getDeviceIcon(visitor.device);
                  return (
                    <tr
                      key={visitor.id}
                      className="border-b border-border last:border-0 hover:bg-secondary/50"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Globe className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">
                              {visitor.city}, {visitor.country}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {visitor.ip}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <DeviceIcon className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm">{visitor.browser}</p>
                            <p className="text-xs text-muted-foreground">
                              {visitor.os}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm">
                            {visitor.pages.length} pages
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm">{visitor.referrer}</td>
                      <td className="py-3 px-4 text-sm">{visitor.duration}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        {visitor.timestamp}
                      </td>
                      <td className="py-3 px-4">
                        {visitor.isOnline ? (
                          <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                            Online
                          </Badge>
                        ) : (
                          <Badge variant="secondary">Offline</Badge>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, filteredVisitors.length)} of{" "}
              {filteredVisitors.length} visitors
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">
                Page {currentPage} of {totalPages || 1}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages || totalPages === 0}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
