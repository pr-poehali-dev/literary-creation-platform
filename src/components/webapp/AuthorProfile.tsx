import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const AuthorProfile = () => {
  const books = [
    { title: 'Тени прошлого', chapters: 45, status: 'published', reads: '12.5K' },
    { title: 'Звёздный путь', chapters: 32, status: 'ongoing', reads: '10.2K' },
    { title: 'Новый проект', chapters: 8, status: 'draft', reads: '0' },
  ];

  const achievements = [
    { icon: 'Award', title: 'Дебютант года', date: '2024' },
    { icon: 'TrendingUp', title: '10K читателей', date: '2024' },
    { icon: 'Star', title: 'Рейтинг 4.8+', date: '2024' },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl text-white font-bold">АС</span>
                </div>
                <h2 className="text-2xl font-bold mb-1">Анна Светлова</h2>
                <p className="text-muted-foreground mb-4">@anna_svetlova</p>
                <div className="flex gap-2 justify-center mb-4">
                  <Badge>Автор</Badge>
                  <Badge variant="secondary">Pro</Badge>
                </div>
                <Button className="w-full mb-2">
                  <Icon name="Settings" className="w-4 h-4 mr-2" />
                  Редактировать профиль
                </Button>
                <Button variant="outline" className="w-full">
                  <Icon name="Share2" className="w-4 h-4 mr-2" />
                  Поделиться
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Icon name="BarChart3" className="w-5 h-5" />
                  Статистика
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Произведений</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Читателей</span>
                    <span className="font-semibold">8,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Общий рейтинг</span>
                    <span className="font-semibold flex items-center gap-1">
                      <Icon name="Star" className="w-4 h-4 text-amber-500 fill-amber-500" />
                      4.8
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Подписчиков</span>
                    <span className="font-semibold">1,245</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Icon name="Trophy" className="w-5 h-5" />
                  Достижения
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={achievement.icon as any} className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{achievement.title}</div>
                        <div className="text-xs text-muted-foreground">{achievement.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="works" className="space-y-6">
              <TabsList>
                <TabsTrigger value="works">Произведения</TabsTrigger>
                <TabsTrigger value="about">О себе</TabsTrigger>
                <TabsTrigger value="activity">Активность</TabsTrigger>
              </TabsList>

              <TabsContent value="works" className="space-y-4">
                {books.map((book, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex gap-4 flex-1">
                          <div className="w-20 h-28 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                              <span className="flex items-center gap-1">
                                <Icon name="FileText" className="w-4 h-4" />
                                {book.chapters} глав
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon name="Eye" className="w-4 h-4" />
                                {book.reads} просмотров
                              </span>
                            </div>
                            <div className="flex gap-2">
                              {book.status === 'published' && (
                                <Badge className="bg-green-500">Опубликовано</Badge>
                              )}
                              {book.status === 'ongoing' && (
                                <Badge className="bg-blue-500">В процессе</Badge>
                              )}
                              {book.status === 'draft' && (
                                <Badge variant="outline">Черновик</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <Button variant="outline" size="icon">
                            <Icon name="Edit" className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="icon">
                            <Icon name="MoreVertical" className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button className="w-full" size="lg">
                  <Icon name="Plus" className="w-4 h-4 mr-2" />
                  Создать новое произведение
                </Button>
              </TabsContent>

              <TabsContent value="about">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Обо мне</h3>
                      <p className="text-muted-foreground">
                        Увлекаюсь литературой с детства. Пишу детективы с элементами мистики.
                        Люблю создавать захватывающие сюжеты с неожиданными поворотами.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Жанры</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Детектив</Badge>
                        <Badge variant="outline">Мистика</Badge>
                        <Badge variant="outline">Триллер</Badge>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Контакты</h3>
                      <div className="space-y-2">
                        <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                          <Icon name="Mail" className="w-4 h-4" />
                          anna@example.com
                        </a>
                        <a href="#" className="flex items-center gap-2 text-primary hover:underline">
                          <Icon name="Globe" className="w-4 h-4" />
                          annasvetlova.ru
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {[
                        { action: 'Опубликована новая глава', book: 'Звёздный путь', time: '2 часа назад' },
                        { action: 'Получен комментарий', book: 'Тени прошлого', time: '5 часов назад' },
                        { action: 'Достигнуто 10K читателей', book: 'Все произведения', time: '1 день назад' },
                      ].map((activity, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="font-medium">{activity.action}</div>
                            <div className="text-sm text-muted-foreground">{activity.book}</div>
                            <div className="text-xs text-muted-foreground mt-1">{activity.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
