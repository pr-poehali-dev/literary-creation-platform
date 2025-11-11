import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
      
      <div className="container mx-auto px-6 py-20 md:py-32 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Создавайте и читайте{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  литературные шедевры
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Платформа, где авторы находят своих читателей, а читатели открывают новые миры
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg" onClick={onGetStarted}>
                <Icon name="Sparkles" className="w-5 h-5 mr-2" />
                Начать путешествие
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Play" className="w-5 h-5 mr-2" />
                Посмотреть демо
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Авторов</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-muted-foreground">Произведений</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Читателей</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/16f61ebc-c8eb-475f-9224-fa0ba0f241da/files/76b6cca5-b001-4093-8903-1160f11df960.jpg"
                alt="Literary creativity"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-secondary to-primary rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
