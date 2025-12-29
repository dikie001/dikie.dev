import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Search,
  Trash2,
  Mail,
  MailOpen,
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  ExternalLink,
} from "lucide-react";

// Mock data
const initialMessages = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    subject: "Full Stack Developer Position",
    message:
      "Hi, I came across your portfolio and was impressed by your work. We have an opening for a Full Stack Developer position at our company. Would you be interested in discussing this opportunity?",
    timestamp: "2024-12-27 09:45:00",
    read: false,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@techcorp.com",
    subject: "Freelance Project Inquiry",
    message:
      "Hello! I'm looking for a developer to help build a web application for our startup. Your portfolio projects look exactly like what we need. Can we schedule a call to discuss the project details?",
    timestamp: "2024-12-26 15:30:00",
    read: false,
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "mchen@university.edu",
    subject: "Speaking Opportunity",
    message:
      "We would like to invite you to speak at our university's tech conference next month. The topic would be about modern web development practices and your experience as a developer.",
    timestamp: "2024-12-25 11:20:00",
    read: true,
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma@designstudio.io",
    subject: "Collaboration Proposal",
    message:
      "I'm a UI/UX designer and I've been following your work. I think we could create amazing projects together. Would you be open to collaborating on some freelance projects?",
    timestamp: "2024-12-24 16:45:00",
    read: true,
  },
  {
    id: 5,
    name: "David Park",
    email: "david.park@startup.com",
    subject: "Technical Co-founder Search",
    message:
      "I'm building a SaaS product and looking for a technical co-founder. Your skills and experience align perfectly with what we need. Let's connect and discuss this opportunity!",
    timestamp: "2024-12-23 10:15:00",
    read: true,
  },
];

export function Messages() {
  const [messages, setMessages] = useState(initialMessages);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<
    (typeof initialMessages)[0] | null
  >(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredMessages = messages.filter(
    (message) =>
      message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const unreadCount = messages.filter((m) => !m.read).length;
  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);

  const toggleRead = (id: number) => {
    setMessages(
      messages.map((m) => (m.id === id ? { ...m, read: !m.read } : m))
    );
    if (selectedMessage?.id === id) {
      setSelectedMessage({ ...selectedMessage, read: !selectedMessage.read });
    }
  };

  const deleteMessage = (id: number) => {
    setMessages(messages.filter((m) => m.id !== id));
    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">
            Manage contact form submissions.
            {unreadCount > 0 && (
              <Badge className="ml-2 bg-primary">{unreadCount} unread</Badge>
            )}
          </p>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search messages..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Messages List */}
        <Card className="hover:border-primary/50">
          {" "}
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              All Messages ({filteredMessages.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => {
                    setSelectedMessage(message);
                    if (!message.read) toggleRead(message.id);
                  }}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedMessage?.id === message.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:bg-secondary/50"
                  } ${!message.read ? "bg-primary/5" : ""}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {!message.read && (
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      )}
                      <span className="font-medium text-sm">
                        {message.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(message.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-1">{message.subject}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {message.message}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Message Detail */}
        <Card className="hover:border-primary/50">
          {" "}
          <CardHeader>
            <CardTitle>Message Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedMessage ? (
              <div className="space-y-6">
                {/* Sender Info */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{selectedMessage.name}</p>
                      <a
                        href={`mailto:${selectedMessage.email}`}
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        {selectedMessage.email}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <Badge
                    variant={selectedMessage.read ? "secondary" : "default"}
                  >
                    {selectedMessage.read ? "Read" : "Unread"}
                  </Badge>
                </div>

                {/* Subject */}
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Subject</p>
                  <p className="font-medium">{selectedMessage.subject}</p>
                </div>

                {/* Timestamp */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{selectedMessage.timestamp}</span>
                </div>

                {/* Message */}
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => toggleRead(selectedMessage.id)}
                  >
                    {selectedMessage.read ? (
                      <>
                        <Mail className="h-4 w-4 mr-2" />
                        Mark as Unread
                      </>
                    ) : (
                      <>
                        <MailOpen className="h-4 w-4 mr-2" />
                        Mark as Read
                      </>
                    )}
                  </Button>
                  <Button asChild variant="default">
                    <a
                      href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                    >
                      Reply
                    </a>
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => deleteMessage(selectedMessage.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">
                  Select a message to view details
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
