import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Hero from '@/components/webapp/Hero';
import Library from '@/components/webapp/Library';
import Editor from '@/components/webapp/Editor';
import AuthorProfile from '@/components/webapp/AuthorProfile';
import ReaderProfile from '@/components/webapp/ReaderProfile';
import Community from '@/components/webapp/Community';
import Analytics from '@/components/webapp/Analytics';
import Recommendations from '@/components/webapp/Recommendations';

type ViewType = 'home' | 'library' | 'editor' | 'author-profile' | 'reader-profile' | 'community' | 'analytics' | 'recommendations';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [userType, setUserType] = useState<'author' | 'reader' | null>(null);

  const renderView = () => {
    switch (currentView) {
      case 'library':
        return <Library />;
      case 'editor':
        return <Editor />;
      case 'author-profile':
        return <AuthorProfile />;
      case 'reader-profile':
        return <ReaderProfile />;
      case 'community':
        return <Community />;
      case 'analytics':
        return <Analytics />;
      case 'recommendations':
        return <Recommendations />;
      default:
        return (
          <>
            <Hero onGetStarted={() => setCurrentView('library')} />
            
            <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
              <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Выберите свою роль
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Каждая роль открывает уникальные возможности платформы
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <Card className="hover:shadow-xl transition-all cursor-pointer border-2" onClick={() => setUserType('author')}>
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Icon name="Feather" className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Я автор</CardTitle>
                      <CardDescription>Создавайте, публикуйте и монетизируйте свои произведения</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                          <span>Профессиональный редактор</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                          <span>Аналитика и статистика</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                          <span>Монетизация контента</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="w-5 h-5 text-primary mt-0.5" />
                          <span>Совместная работа</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-xl transition-all cursor-pointer border-2" onClick={() => setUserType('reader')}>
                    <CardHeader>
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                        <Icon name="BookOpen" className="w-8 h-8 text-secondary" />
                      </div>
                      <CardTitle className="text-2xl">Я читатель</CardTitle>
                      <CardDescription>Открывайте новые миры через произведения талантливых авторов</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="w-5 h-5 text-secondary mt-0.5" />
                          <span>Огромная библиотека</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="w-5 h-5 text-secondary mt-0.5" />
                          <span>Персональные рекомендации</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="w-5 h-5 text-secondary mt-0.5" />
                          <span>Комьюнити читателей</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" className="w-5 h-5 text-secondary mt-0.5" />
                          <span>Поддержка авторов</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section className="py-20 px-6">
              <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">Популярные романы недели</h2>
                  <p className="text-muted-foreground text-lg">Самые читаемые произведения нашего сообщества</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: 'Тени прошлого', author: 'Анна Светлова', reads: '12.5K', genre: 'Детектив' },
                    { title: 'Звёздный путь', author: 'Иван Космов', reads: '10.2K', genre: 'Фантастика' },
                    { title: 'Осенний вальс', author: 'Мария Романова', reads: '9.8K', genre: 'Романтика' }
                  ].map((book, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-all">
                      <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary">{book.genre}</Badge>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                          <h3 className="text-white font-bold text-lg">{book.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon name="User" className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{book.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Eye" className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{book.reads}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
              <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4">Инструменты для творчества</h2>
                  <p className="text-muted-foreground text-lg">Всё необходимое для создания шедевров</p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { icon: 'PenTool', title: 'Редактор', desc: 'Профессиональные инструменты написания' },
                    { icon: 'BarChart3', title: 'Аналитика', desc: 'Статистика читателей и вовлеченность' },
                    { icon: 'DollarSign', title: 'Монетизация', desc: 'Зарабатывайте на своём творчестве' },
                    { icon: 'Users', title: 'Коллаборации', desc: 'Создавайте произведения вместе' }
                  ].map((feature, idx) => (
                    <Card key={idx} className="text-center hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name={feature.icon as any} className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="BookOpen" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                LitHub
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <Button variant="ghost" onClick={() => setCurrentView('library')}>
                <Icon name="Library" className="w-4 h-4 mr-2" />
                Библиотека
              </Button>
              {userType === 'author' && (
                <>
                  <Button variant="ghost" onClick={() => setCurrentView('editor')}>
                    <Icon name="PenTool" className="w-4 h-4 mr-2" />
                    Редактор
                  </Button>
                  <Button variant="ghost" onClick={() => setCurrentView('analytics')}>
                    <Icon name="BarChart3" className="w-4 h-4 mr-2" />
                    Аналитика
                  </Button>
                </>
              )}
              <Button variant="ghost" onClick={() => setCurrentView('community')}>
                <Icon name="Users" className="w-4 h-4 mr-2" />
                Сообщество
              </Button>
              <Button variant="ghost" onClick={() => setCurrentView('recommendations')}>
                <Icon name="Sparkles" className="w-4 h-4 mr-2" />
                Рекомендации
              </Button>
            </div>

            <div className="flex items-center gap-3">
              {userType && (
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentView(userType === 'author' ? 'author-profile' : 'reader-profile')}
                >
                  <Icon name="User" className="w-4 h-4 mr-2" />
                  Профиль
                </Button>
              )}
              <Button>
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {renderView()}

      <footer className="border-t py-12 px-6 mt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">LitHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для авторов и читателей, где рождаются литературные шедевры
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Для авторов</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer">Редактор</li>
                <li className="hover:text-primary cursor-pointer">Аналитика</li>
                <li className="hover:text-primary cursor-pointer">Монетизация</li>
                <li className="hover:text-primary cursor-pointer">Коллаборации</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Для читателей</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer">Библиотека</li>
                <li className="hover:text-primary cursor-pointer">Рекомендации</li>
                <li className="hover:text-primary cursor-pointer">Сообщество</li>
                <li className="hover:text-primary cursor-pointer">Подписки</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer">Помощь</li>
                <li className="hover:text-primary cursor-pointer">Условия использования</li>
                <li className="hover:text-primary cursor-pointer">Конфиденциальность</li>
                <li className="hover:text-primary cursor-pointer">Контакты</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 LitHub. Все права защищены. Создано с любовью к литературе.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
