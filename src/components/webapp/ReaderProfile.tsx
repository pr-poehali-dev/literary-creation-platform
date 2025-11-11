import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const ReaderProfile = () => {
  const readingList = [
    { title: 'Тени прошлого', author: 'Анна Светлова', progress: 65, chapter: 'Глава 29 из 45' },
    { title: 'Звёздный путь', author: 'Иван Космов', progress: 100, chapter: 'Завершено' },
    { title: 'Осенний вальс', author: 'Мария Романова', progress: 23, chapter: 'Глава 6 из 28' },
  ];

  const favoriteGenres = [
    { genre: 'Детектив', count: 12, color: 'bg-primary' },
    { genre: 'Фантастика', count: 8, color: 'bg-secondary' },
    { genre: 'Романтика', count: 5, color: 'bg-accent' },
  ];

  const achievements = [
    { icon: 'BookOpen', title: 'Первая книга', desc: 'Прочитали первое произведение' },
    { icon: 'Flame', title: 'Читающая серия', desc: '7 дней подряд' },
    { icon: 'Heart', title: 'Ценитель', desc: '50 лайков' },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl text-white font-bold">МК</span>
                </div>
                <h2 className="text-2xl font-bold mb-1">Мария Книголюб</h2>
                <p className="text-muted-foreground mb-4">@maria_reader</p>
                <div className="flex gap-2 justify-center mb-4">
                  <Badge variant="secondary">Читатель</Badge>
                  <Badge>Активный</Badge>
                </div>
                <Button className="w-full mb-2">
                  <Icon name="Settings" className="w-4 h-4 mr-2" />
                  Настройки
                </Button>
                <Button variant="outline" className="w-full">
                  <Icon name="Share2" className="w-4 h-4 mr-2" />
                  Поделиться профилем
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Icon name="BarChart3" className="w-5 h-5" />
                  Статистика чтения
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Прочитано книг</span>
                    <span className="font-semibold">25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Часов чтения</span>
                    <span className="font-semibold">142</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Подписок</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Избранное</span>
                    <span className="font-semibold">34</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Icon name="Award" className="w-5 h-5" />
                  Достижения
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={achievement.icon as any} className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{achievement.title}</div>
                        <div className="text-xs text-muted-foreground">{achievement.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="reading" className="space-y-6">
              <TabsList>
                <TabsTrigger value="reading">Читаю сейчас</TabsTrigger>
                <TabsTrigger value="library">Моя библиотека</TabsTrigger>
                <TabsTrigger value="stats">Статистика</TabsTrigger>
              </TabsList>

              <TabsContent value="reading" className="space-y-4">
                {readingList.map((book, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-20 h-28 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex-shrink-0" />
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{book.title}</h3>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Icon name="User" className="w-3 h-3" />
                              {book.author}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{book.chapter}</span>
                              <span className="font-medium">{book.progress}%</span>
                            </div>
                            <Progress value={book.progress} className="h-2" />
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm">
                              <Icon name="BookOpen" className="w-4 h-4 mr-2" />
                              Продолжить чтение
                            </Button>
                            {book.progress === 100 && (
                              <Badge className="bg-green-500">Завершено</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="library" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="cursor-pointer hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="Bookmark" className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">34</div>
                          <div className="text-sm text-muted-foreground">Избранное</div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Посмотреть все
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                          <Icon name="Clock" className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">8</div>
                          <div className="text-sm text-muted-foreground">Читать позже</div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Посмотреть все
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Любимые жанры</h3>
                    <div className="space-y-4">
                      {favoriteGenres.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{item.genre}</span>
                            <span className="text-muted-foreground">{item.count} книг</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className={item.color}
                              style={{ width: `${(item.count / 25) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="stats">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Активность по дням</h3>
                      <div className="h-48 flex items-end justify-between gap-2">
                        {[4, 6, 3, 8, 5, 9, 7].map((hours, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                            <div className="w-full bg-gradient-to-t from-secondary to-primary rounded-t-lg" style={{ height: `${(hours / 9) * 100}%` }} />
                            <span className="text-xs text-muted-foreground">
                              {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'][idx]}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="text-center mt-4 text-sm text-muted-foreground">
                        Часов чтения в неделю: 42
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Цель месяца</h3>
                      <div className="space-y-4">
                        <div className="text-center py-6">
                          <div className="text-5xl font-bold mb-2">17 / 20</div>
                          <div className="text-muted-foreground">книг прочитано</div>
                        </div>
                        <Progress value={85} className="h-3" />
                        <p className="text-sm text-center text-muted-foreground">
                          Осталось 3 книги до цели!
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReaderProfile;
