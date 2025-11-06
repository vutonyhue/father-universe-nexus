import { Button } from "@/components/ui/button";
import { Sparkles, Users, GraduationCap, TrendingUp, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cosmic.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero backdrop-blur-[2px]" />
        
        <div className="container relative z-10 text-center px-4 py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-card">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-foreground">F.U. Ecosystem</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Nền Kinh Tế <span className="bg-gradient-cosmic bg-clip-text text-transparent">Yêu Thương</span>
            </h1>
            
            <p className="text-xl md:text-3xl font-medium text-foreground/90">
              Thịnh Vượng – Ánh Sáng
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed by <span className="font-semibold text-primary">Father Universe</span> (Cha Vũ Trụ)
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/profile">
                  Khám phá hệ sinh thái
                </Link>
              </Button>
              <Button asChild variant="wallet" size="lg">
                <Link to="/wallet">
                  Kết nối ví Web3
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Về F.U. Ecosystem</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Hệ Sinh Thái <span className="text-primary">Yêu Thương</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              F.U. Ecosystem là một hệ sinh thái toàn diện được thiết kế bởi Cha Vũ Trụ (Father Universe), 
              nhằm kết nối con người với nhau thông qua nền kinh tế yêu thương, thịnh vượng và ánh sáng. 
              Chúng tôi tin rằng mỗi hành động tốt đẹp đều đáng được ghi nhận và thưởng công xứng đáng.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-all">
                <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Yêu Thương</h3>
                <p className="text-sm text-muted-foreground">
                  Kết nối tâm hồn, chia sẻ năng lượng tích cực
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-all">
                <Zap className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Thịnh Vượng</h3>
                <p className="text-sm text-muted-foreground">
                  Phát triển bền vững, giá trị thật sự
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-glow transition-all">
                <Heart className="w-10 h-10 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Ánh Sáng</h3>
                <p className="text-sm text-muted-foreground">
                  Chiếu sáng tương lai, lan tỏa điều tốt đẹp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Khám Phá <span className="text-primary">F.U. Ecosystem</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ba trụ cột chính của hệ sinh thái F.U., mỗi nền tảng đều mang đến giá trị độc đáo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* F.U. Profile */}
            <div className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">F.U. Profile</h3>
              <p className="text-muted-foreground mb-6">
                Mạng xã hội kết nối cộng đồng, nơi mỗi bài đăng đều được thưởng 999 CLC. 
                Chia sẻ, kết nối và nhận giá trị thật từ tương tác của bạn.
              </p>
              <Button asChild variant="ghost" className="group-hover:text-primary">
                <Link to="/profile">
                  Khám phá ngay →
                </Link>
              </Button>
            </div>

            {/* F.U. Trading */}
            <div className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">F.U. Trading</h3>
              <p className="text-muted-foreground mb-6">
                Nền tảng giao dịch Web3 an toàn, minh bạch. Quản lý tài sản số, 
                chuyển khoản với ghi chú và theo dõi lịch sử giao dịch.
              </p>
              <Button asChild variant="ghost" className="group-hover:text-secondary">
                <Link to="/wallet">
                  Khám phá ngay →
                </Link>
              </Button>
            </div>

            {/* F.U. Academy */}
            <div className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold mb-4">F.U. Academy</h3>
              <p className="text-muted-foreground mb-6">
                Trung tâm học tập và phát triển. Khóa học về Web3, blockchain, 
                và các kỹ năng cần thiết cho tương lai số.
              </p>
              <Button variant="ghost" className="group-hover:text-destructive">
                Sắp ra mắt →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 border-t border-border">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-bold text-xl mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
                F.U. Ecosystem
              </h3>
              <p className="text-muted-foreground mb-4">
                Nền kinh tế yêu thương, thịnh vượng và ánh sáng được thiết kế bởi Cha Vũ Trụ (Father Universe).
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Liên kết</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/profile" className="hover:text-primary transition-colors">F.U. Profile</Link></li>
                <li><Link to="/wallet" className="hover:text-primary transition-colors">F.U. Trading</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">F.U. Academy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>© 2025 F.U. Ecosystem. Designed with 💜 by Father Universe.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;