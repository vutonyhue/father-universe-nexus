import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wallet as WalletIcon, ArrowUpRight, ArrowDownLeft, BarChart3, Settings, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Transaction {
  id: number;
  type: "send" | "receive";
  amount: string;
  currency: string;
  note: string;
  timestamp: string;
  status: "completed" | "pending";
}

const Wallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [transactions] = useState<Transaction[]>([
    {
      id: 1,
      type: "receive",
      amount: "0.5",
      currency: "ETH",
      note: "Phần thưởng từ F.U. Profile",
      timestamp: "2 giờ trước",
      status: "completed"
    },
    {
      id: 2,
      type: "send",
      amount: "100",
      currency: "USDC",
      note: "Chuyển cho bạn",
      timestamp: "5 giờ trước",
      status: "completed"
    },
    {
      id: 3,
      type: "receive",
      amount: "999",
      currency: "CLC",
      note: "Thưởng đăng bài",
      timestamp: "1 ngày trước",
      status: "completed"
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-card border-b border-border shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <Link to="/" className="font-bold text-xl bg-gradient-gold bg-clip-text text-transparent">
              F.U. Trading
            </Link>
          </div>

          <Button 
            variant={isConnected ? "outline" : "wallet"} 
            size="sm"
            onClick={() => setIsConnected(!isConnected)}
          >
            <WalletIcon className="w-4 h-4 mr-2" />
            {isConnected ? "0x1234...5678" : "Kết nối ví"}
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <Card className="p-4 sticky top-24 shadow-card">
              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-primary bg-primary/10">
                  <BarChart3 className="w-5 h-5 mr-3" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <ArrowUpRight className="w-5 h-5 mr-3" />
                  Gửi tiền
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <ArrowDownLeft className="w-5 h-5 mr-3" />
                  Nhận tiền
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <WalletIcon className="w-5 h-5 mr-3" />
                  Ví của tôi
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="w-5 h-5 mr-3" />
                  Cài đặt
                </Button>
              </nav>

              <div className="mt-6 p-4 bg-gradient-gold rounded-xl text-accent-foreground">
                <h3 className="font-semibold mb-2">💎 Hỗ trợ</h3>
                <p className="text-sm opacity-90">Cần trợ giúp? Liên hệ support</p>
              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-6">
            {/* Balance Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-cosmic text-primary-foreground shadow-glow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm opacity-90">Tổng tài sản</span>
                  <WalletIcon className="w-5 h-5 opacity-75" />
                </div>
                <h2 className="text-3xl font-bold mb-1">$5,432.18</h2>
                <p className="text-sm opacity-75">+12.5% so với tháng trước</p>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-glow transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Ethereum</span>
                  <span className="text-xs font-medium text-primary">ETH</span>
                </div>
                <h2 className="text-2xl font-bold mb-1">2.45 ETH</h2>
                <p className="text-sm text-muted-foreground">≈ $4,350.00</p>
              </Card>

              <Card className="p-6 shadow-card hover:shadow-glow transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">USDC</span>
                  <span className="text-xs font-medium text-secondary">USDC</span>
                </div>
                <h2 className="text-2xl font-bold mb-1">1,082.18</h2>
                <p className="text-sm text-muted-foreground">USD Coin</p>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold text-lg mb-4">Giao dịch nhanh</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="recipient">Địa chỉ người nhận</Label>
                    <Input 
                      id="recipient" 
                      placeholder="0x..." 
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="amount">Số lượng</Label>
                    <Input 
                      id="amount" 
                      type="number" 
                      placeholder="0.00" 
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="note">Ghi chú</Label>
                    <Input 
                      id="note" 
                      placeholder="Thêm ghi chú cho giao dịch..." 
                      className="mt-2"
                    />
                  </div>
                  <Button className="w-full" variant="wallet">
                    <ArrowUpRight className="w-4 h-4 mr-2" />
                    Gửi tiền
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 flex flex-col items-center justify-center">
                  <div className="w-48 h-48 bg-card rounded-xl flex items-center justify-center mb-4 shadow-card">
                    <p className="text-sm text-muted-foreground text-center px-4">
                      Mã QR nhận tiền sẽ hiển thị ở đây
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Địa chỉ ví của bạn</p>
                  <code className="text-xs bg-card px-4 py-2 rounded-lg font-mono">
                    0x1234...5678
                  </code>
                  <Button variant="outline" size="sm" className="mt-4">
                    Sao chép địa chỉ
                  </Button>
                </div>
              </div>
            </Card>

            {/* Recent Transactions */}
            <Card className="p-6 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Giao dịch gần đây</h3>
                <Button variant="ghost" size="sm">Xem tất cả →</Button>
              </div>

              <div className="space-y-4">
                {transactions.map((tx) => (
                  <div 
                    key={tx.id} 
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === "receive" 
                          ? "bg-primary/10 text-primary" 
                          : "bg-secondary/10 text-secondary"
                      }`}>
                        {tx.type === "receive" ? (
                          <ArrowDownLeft className="w-5 h-5" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">
                          {tx.type === "receive" ? "Nhận" : "Gửi"} {tx.amount} {tx.currency}
                        </p>
                        <p className="text-sm text-muted-foreground">{tx.note}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        tx.type === "receive" ? "text-primary" : "text-secondary"
                      }`}>
                        {tx.type === "receive" ? "+" : "-"}{tx.amount} {tx.currency}
                      </p>
                      <p className="text-xs text-muted-foreground">{tx.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Wallet;