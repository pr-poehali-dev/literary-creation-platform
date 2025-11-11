import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Analytics = () => {
  const stats = [
    { label: 'Просмотры', value: '24,531', change: '+12.5%', icon: 'Eye', trend: 'up' },
    { label: 'Читатели', value: '8,234', change: '+8.2%', icon: 'Users', trend: 'up' },
    { label: 'Лайки', value: '1,892', change: '+15.3%', icon: 'Heart', trend: 'up' },
    { label: 'Доход', value: '₽42,150', change: '+22.1%', icon: 'DollarSign', trend: 'up' },
  ];

  const topChapters = [
    { title: 'Глава 15: Поворот', reads: 5420, engagement: 94 },
    { title: 'Глава 1: Начало', reads: 4891, engagement: 91 },
    { title: 'Глава 23: Раскрытие', reads: 4203, engagement: 89 },
    { title: 'Глава 8: Встреча', reads: 3876, engagement: 87 },
  ];

  const readerDemographics = [
    { age: '18-24', percentage: 35, color: 'bg-primary' },
    { age: '25-34', percentage: 42, color: 'bg-secondary' },
    { age: '35-44', percentage: 18, color: 'bg-accent' },
    { age: '45+', percentage: 5, color: 'bg-muted' },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Аналитика и статистика</h1>
          <p className="text-muted-foreground text-lg">Отслеживайте успех ваших произведений</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={stat.icon as any} className="w-6 h-6 text-primary" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <Icon name={stat.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} className="w-4 h-4" />
                    {stat.change}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="readers">Читатели</TabsTrigger>
            <TabsTrigger value="revenue">Доходы</TabsTrigger>
            <TabsTrigger value="engagement">Вовлеченность</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Просмотры за неделю</CardTitle>
                  <CardDescription>Динамика просмотров ваших произведений</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {[3200, 3800, 4100, 3600, 4500, 5200, 4800].map((value, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg" style={{ height: `${(value / 5200) * 100}%` }} />
                        <span className="text-xs text-muted-foreground">
                          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'][idx]}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Топ глав</CardTitle>
                  <CardDescription>Самые читаемые главы за месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topChapters.map((chapter, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium line-clamp-1">{chapter.title}</span>
                          <span className="text-muted-foreground">{chapter.reads} чтений</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-secondary"
                            style={{ width: `${chapter.engagement}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Демография читателей</CardTitle>
                <CardDescription>Возрастной состав вашей аудитории</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {readerDemographics.map((demo, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{demo.age} лет</span>
                        <span className="text-muted-foreground">{demo.percentage}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${demo.color}`}
                          style={{ width: `${demo.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="readers">
            <Card>
              <CardHeader>
                <CardTitle>Активность читателей</CardTitle>
                <CardDescription>Как ваши читатели взаимодействуют с контентом</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border rounded-lg">
                    <Icon name="BookOpen" className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold mb-1">89.2%</div>
                    <div className="text-sm text-muted-foreground">Дочитывают главы</div>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Icon name="Clock" className="w-8 h-8 mx-auto mb-3 text-secondary" />
                    <div className="text-3xl font-bold mb-1">12 мин</div>
                    <div className="text-sm text-muted-foreground">Среднее время чтения</div>
                  </div>
                  <div className="text-center p-6 border rounded-lg">
                    <Icon name="Repeat" className="w-8 h-8 mx-auto mb-3 text-accent" />
                    <div className="text-3xl font-bold mb-1">3.4</div>
                    <div className="text-sm text-muted-foreground">Возвращений в неделю</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue">
            <Card>
              <CardHeader>
                <CardTitle>Структура доходов</CardTitle>
                <CardDescription>Источники вашего заработка</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Подписки читателей</span>
                      <span className="font-semibold">₽28,500 (68%)</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '68%' }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Платные главы</span>
                      <span className="font-semibold">₽10,200 (24%)</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-secondary" style={{ width: '24%' }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Донаты</span>
                      <span className="font-semibold">₽3,450 (8%)</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent" style={{ width: '8%' }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Комментарии</CardTitle>
                  <CardDescription>Активность обсуждений</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      892
                    </div>
                    <div className="text-muted-foreground">комментария за месяц</div>
                    <div className="text-sm text-green-600 mt-2">+45% к прошлому месяцу</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Рейтинг</CardTitle>
                  <CardDescription>Оценки читателей</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Icon name="Star" className="w-8 h-8 text-amber-500 fill-amber-500" />
                      <div className="text-5xl font-bold">4.8</div>
                    </div>
                    <div className="text-muted-foreground">из 5.0</div>
                    <div className="text-sm text-muted-foreground mt-2">234 оценки</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
