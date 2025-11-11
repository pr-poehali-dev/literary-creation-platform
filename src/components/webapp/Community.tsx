import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Community = () => {
  const discussions = [
    { 
      title: 'Лучшие детективы 2024 года', 
      author: 'Анна Светлова', 
      replies: 43, 
      likes: 128,
      tags: ['Детектив', 'Обсуждение'],
      time: '2 часа назад'
    },
    { 
      title: 'Как побороть писательский блок?', 
      author: 'Иван Космов', 
      replies: 67, 
      likes: 89,
      tags: ['Помощь', 'Советы'],
      time: '5 часов назад'
    },
    { 
      title: 'Поиск соавтора для фантастического романа', 
      author: 'Петр Хронов', 
      replies: 24, 
      likes: 56,
      tags: ['Коллаборация', 'Фантастика'],
      time: '1 день назад'
    },
  ];

  const groups = [
    { name: 'Детективы и триллеры', members: 2453, icon: 'Search' },
    { name: 'Фантастика и фэнтези', members: 3891, icon: 'Sparkles' },
    { name: 'Романтические истории', members: 1876, icon: 'Heart' },
    { name: 'Начинающие авторы', members: 5234, icon: 'Users' },
  ];

  const events = [
    { title: 'Вебинар: Создание запоминающихся персонажей', date: '15 ноября', participants: 234 },
    { title: 'Литературный конкурс "Осенние истории"', date: '20 ноября', participants: 456 },
    { title: 'Встреча писателей онлайн', date: '25 ноября', participants: 89 },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Сообщество</h1>
          <p className="text-muted-foreground text-lg">Общайтесь с авторами и читателями</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Tabs defaultValue="discussions" className="space-y-6">
              <TabsList>
                <TabsTrigger value="discussions">
                  <Icon name="MessageSquare" className="w-4 h-4 mr-2" />
                  Обсуждения
                </TabsTrigger>
                <TabsTrigger value="groups">
                  <Icon name="Users" className="w-4 h-4 mr-2" />
                  Группы
                </TabsTrigger>
                <TabsTrigger value="events">
                  <Icon name="Calendar" className="w-4 h-4 mr-2" />
                  События
                </TabsTrigger>
              </TabsList>

              <TabsContent value="discussions" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex-shrink-0" />
                      <div className="flex-1">
                        <Input placeholder="Начните новое обсуждение..." className="mb-2" />
                        <div className="flex gap-2">
                          <Button size="sm">
                            <Icon name="Send" className="w-4 h-4 mr-2" />
                            Опубликовать
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Image" className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {discussions.map((discussion, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex-shrink-0" />
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="font-bold text-lg mb-1">{discussion.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{discussion.author}</span>
                              <span>•</span>
                              <span>{discussion.time}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {discussion.tags.map((tag, tagIdx) => (
                              <Badge key={tagIdx} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <button className="flex items-center gap-1 hover:text-primary transition-colors">
                              <Icon name="MessageSquare" className="w-4 h-4" />
                              <span>{discussion.replies}</span>
                            </button>
                            <button className="flex items-center gap-1 hover:text-primary transition-colors">
                              <Icon name="Heart" className="w-4 h-4" />
                              <span>{discussion.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 hover:text-primary transition-colors">
                              <Icon name="Share2" className="w-4 h-4" />
                              <span>Поделиться</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="groups" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {groups.map((group, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-all cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon name={group.icon as any} className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold mb-2">{group.name}</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {group.members.toLocaleString()} участников
                            </p>
                            <Button size="sm" variant="outline" className="w-full">
                              Присоединиться
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardContent className="p-6 text-center">
                    <Icon name="Plus" className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">Создайте свою группу</h3>
                    <p className="text-muted-foreground mb-4">
                      Соберите единомышленников вокруг любимого жанра или темы
                    </p>
                    <Button>
                      <Icon name="Plus" className="w-4 h-4 mr-2" />
                      Создать группу
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="events" className="space-y-4">
                {events.map((event, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-col text-white flex-shrink-0">
                          <div className="text-xs">ноя</div>
                          <div className="text-2xl font-bold">{event.date.split(' ')[0]}</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Icon name="Calendar" className="w-4 h-4" />
                              {event.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Users" className="w-4 h-4" />
                              {event.participants} участников
                            </span>
                          </div>
                          <Button size="sm">
                            <Icon name="Check" className="w-4 h-4 mr-2" />
                            Участвовать
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Icon name="TrendingUp" className="w-5 h-5" />
                  Популярные теги
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Детектив', 'Фантастика', 'Романтика', 'Советы', 'Коллаборация', 'Драма', 'Триллер', 'Помощь'].map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Icon name="Star" className="w-5 h-5" />
                  Активные участники
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Анна Светлова', posts: 245 },
                    { name: 'Иван Космов', posts: 189 },
                    { name: 'Мария Романова', posts: 156 },
                  ].map((user, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full" />
                        <div>
                          <div className="font-medium text-sm">{user.name}</div>
                          <div className="text-xs text-muted-foreground">{user.posts} постов</div>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Icon name="UserPlus" className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-secondary text-white">
              <CardContent className="p-6">
                <Icon name="Award" className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-lg mb-2">Конкурс месяца</h3>
                <p className="text-sm mb-4 opacity-90">
                  Напишите рассказ на тему "Осень" и выиграйте призы!
                </p>
                <Button variant="secondary">
                  Участвовать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
