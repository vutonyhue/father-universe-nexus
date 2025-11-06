import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Home, Users, Bell, Settings, Image, Heart, MessageCircle, Share2, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const Profile = () => {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      author: "Nguyễn Văn A",
      content: "Chào mọi người! Rất vui được tham gia F.U. Ecosystem. Cùng nhau xây dựng nền kinh tế yêu thương nhé! 💜✨",
      likes: 42,
      comments: 8,
      timestamp: "2 giờ trước"
    },
    {
      id: 2,
      author: "Trần Thị B",
      content: "Mình vừa nhận được 999 CLC từ bài đăng đầu tiên. Quá tuyệt vời! Cảm ơn Father Universe đã tạo ra hệ sinh thái này 🙏",
      likes: 87,
      comments: 15,
      timestamp: "5 giờ trước"
    },
    {
      id: 3,
      author: "Lê Văn C",
      content: "Ai muốn tìm hiểu về Web3 và blockchain không? Mình có thể chia sẻ kinh nghiệm nhé!",
      likes: 156,
      comments: 23,
      timestamp: "1 ngày trước"
    }
  ]);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-card border-b border-border shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <Link to="/" className="font-bold text-xl bg-gradient-cosmic bg-clip-text text-transparent">
              F.U. Profile
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button asChild variant="wallet" size="sm">
              <Link to="/wallet">
                Kết nối ví
              </Link>
            </Button>
            <Avatar className="cursor-pointer border-2 border-primary">
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <Card className="p-4 sticky top-24 shadow-card">
              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-primary bg-primary/10">
                  <Home className="w-5 h-5 mr-3" />
                  Trang chủ
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="w-5 h-5 mr-3" />
                  Bạn bè
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="w-5 h-5 mr-3" />
                  Nhóm
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Bell className="w-5 h-5 mr-3" />
                  Thông báo
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="w-5 h-5 mr-3" />
                  Cài đặt
                </Button>
              </nav>

              <div className="mt-6 p-4 bg-gradient-cosmic rounded-xl text-primary-foreground">
                <h3 className="font-semibold mb-2">🎁 Phần thưởng hôm nay</h3>
                <p className="text-sm opacity-90">Đăng bài để nhận 999 CLC!</p>
              </div>
            </Card>
          </aside>

          {/* Main Feed */}
          <main className="lg:col-span-6 space-y-6">
            {/* Post Input */}
            <Card className="p-6 shadow-card">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">U</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <Input 
                    placeholder="Đăng bài để nhận 999 CLC nhé! ✨" 
                    className="border-2 focus:border-primary"
                  />
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm">
                      <Image className="w-4 h-4 mr-2" />
                      Ảnh/Video
                    </Button>
                    <Button variant="hero" size="sm">
                      Đăng bài
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Posts Feed */}
            {posts.map((post) => (
              <Card key={post.id} className="p-6 shadow-card hover:shadow-glow transition-all">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-secondary/20 text-secondary font-semibold">
                      {post.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{post.author}</h3>
                        <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                      </div>
                    </div>
                    
                    <p className="text-foreground mb-4 leading-relaxed">
                      {post.content}
                    </p>

                    <div className="flex items-center gap-6 pt-4 border-t border-border">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive">
                        <Heart className="w-4 h-4 mr-2" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-secondary">
                        <Share2 className="w-4 h-4 mr-2" />
                        Chia sẻ
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </main>

          {/* Right Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <Card className="p-4 sticky top-24 shadow-card">
              <h3 className="font-semibold mb-4">Gợi ý kết bạn</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-muted">U{i}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">Người dùng {i}</p>
                      <p className="text-xs text-muted-foreground">Thành viên mới</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Kết bạn
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Profile;