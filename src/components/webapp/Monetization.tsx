import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Monetization = () => {
  const subscriptionTiers = [
    {
      name: 'Базовый',
      price: 99,
      features: ['Ранний доступ к главам', 'Без рекламы', 'Закрытый чат'],
      subscribers: 234,
      revenue: 23166
    },
    {
      name: 'Премиум',
      price: 299,
      features: ['Всё из Базового', 'Эксклюзивные главы', 'Личное общение', 'Голосование за сюжет'],
      subscribers: 89,
      revenue: 26611
    },
    {
      name: 'VIP',
      price: 999,
      features: ['Всё из Премиум', 'Упоминание в книге', 'Персональная благодарность', 'Видеозвонки'],
      subscribers: 12,
      revenue: 11988
    }
  ];

  const paidChapters = [
    { title: 'Глава 30: Кульминация', price: 49, sales: 543, revenue: 26607 },
    { title: 'Глава 31: Развязка', price: 49, sales: 498, revenue: 24402 },
    { title: 'Бонусная глава: За кулисами', price: 99, sales: 234, revenue: 23166 },
  ];

  const donationStats = {
    total: 45230,
    count: 156,
    average: 290,
    topDonors: [
      { name: 'Алексей К.', amount: 5000 },
      { name: 'Мария П.', amount: 3500 },
      { name: 'Иван С.', amount: 2800 },
    ]
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Монетизация</h1>
          <p className="text-muted-foreground text-lg">Управляйте доходами от ваших произведений</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="DollarSign" className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">Общий доход</div>
              </div>
              <div className="text-3xl font-bold">₽107,572</div>
              <div className="text-sm text-green-600 mt-1">+18.5% за месяц</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-sm text-muted-foreground">Подписчиков</div>
              </div>
              <div className="text-3xl font-bold">335</div>
              <div className="text-sm text-green-600 mt-1">+23 за неделю</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" className="w-5 h-5 text-accent" />
                </div>
                <div className="text-sm text-muted-foreground">Средний чек</div>
              </div>
              <div className="text-3xl font-bold">₽321</div>
              <div className="text-sm text-green-600 mt-1">+12% за месяц</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Wallet" className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">К выплате</div>
              </div>
              <div className="text-3xl font-bold">₽94,229</div>
              <div className="text-sm text-muted-foreground mt-1">Доступно сейчас</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="subscriptions" className="space-y-6">
          <TabsList>
            <TabsTrigger value="subscriptions">
              <Icon name="Crown" className="w-4 h-4 mr-2" />
              Подписки
            </TabsTrigger>
            <TabsTrigger value="chapters">
              <Icon name="FileText" className="w-4 h-4 mr-2" />
              Платные главы
            </TabsTrigger>
            <TabsTrigger value="donations">
              <Icon name="Heart" className="w-4 h-4 mr-2" />
              Донаты
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Icon name="Settings" className="w-4 h-4 mr-2" />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="subscriptions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Уровни подписки</CardTitle>
                <CardDescription>Настройте тарифы и привилегии для ваших подписчиков</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {subscriptionTiers.map((tier, idx) => (
                    <Card key={idx} className="relative overflow-hidden">
                      {idx === 1 && (
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-lg">
                          Популярный
                        </div>
                      )}
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                          <div className="text-3xl font-bold mb-1">₽{tier.price}</div>
                          <div className="text-sm text-muted-foreground">в месяц</div>
                        </div>
                        <ul className="space-y-2">
                          {tier.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className="flex items-start gap-2 text-sm">
                              <Icon name="Check" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4 border-t space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Подписчиков</span>
                            <span className="font-semibold">{tier.subscribers}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Доход/месяц</span>
                            <span className="font-semibold text-green-600">₽{tier.revenue.toLocaleString()}</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          <Icon name="Edit" className="w-4 h-4 mr-2" />
                          Редактировать
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>График подписок</CardTitle>
                <CardDescription>Рост вашей подписной базы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[245, 268, 289, 302, 315, 328, 335].map((value, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div className="text-xs font-medium">{value}</div>
                      <div
                        className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-lg"
                        style={{ height: `${(value / 335) * 100}%` }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {['1 авг', '8 авг', '15 авг', '22 авг', '29 авг', '5 сен', 'Сегодня'][idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chapters" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Платные главы</CardTitle>
                <CardDescription>Управляйте ценами на отдельные главы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paidChapters.map((chapter, idx) => (
                    <Card key={idx}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-bold mb-1">{chapter.title}</h3>
                            <div className="flex gap-6 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Icon name="DollarSign" className="w-4 h-4" />
                                ₽{chapter.price}
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon name="ShoppingCart" className="w-4 h-4" />
                                {chapter.sales} продаж
                              </span>
                              <span className="flex items-center gap-1 text-green-600 font-semibold">
                                <Icon name="TrendingUp" className="w-4 h-4" />
                                ₽{chapter.revenue.toLocaleString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Icon name="Edit" className="w-4 h-4" />
                            </Button>
                            <Switch />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Button className="w-full">
                    <Icon name="Plus" className="w-4 h-4 mr-2" />
                    Сделать главу платной
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Стратегия ценообразования</CardTitle>
                <CardDescription>Рекомендации для увеличения продаж</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="flex gap-3">
                    <Icon name="Lightbulb" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Оптимальная цена</h4>
                      <p className="text-sm text-muted-foreground">
                        На основе аналитики рекомендуемая цена для ваших глав — ₽59. 
                        Это увеличит конверсию на 15-20%.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donations" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Статистика донатов</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold mb-1">₽{donationStats.total.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Всего получено</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold">{donationStats.count}</div>
                      <div className="text-sm text-muted-foreground">Донатов</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">₽{donationStats.average}</div>
                      <div className="text-sm text-muted-foreground">Средний донат</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Топ благотворителей</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {donationStats.topDonors.map((donor, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                            {idx + 1}
                          </div>
                          <span className="font-medium">{donor.name}</span>
                        </div>
                        <span className="font-bold text-green-600">₽{donor.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Настройка донатов</CardTitle>
                <CardDescription>Персонализируйте систему поддержки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Минимальная сумма доната (₽)</Label>
                  <Input type="number" defaultValue="50" className="max-w-xs" />
                </div>
                <div className="space-y-2">
                  <Label>Предустановленные суммы</Label>
                  <div className="flex gap-2 flex-wrap">
                    {[50, 100, 200, 500, 1000].map((amount) => (
                      <Badge key={amount} variant="outline" className="text-base px-4 py-2 cursor-pointer hover:bg-primary hover:text-white">
                        ₽{amount}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Публичная доска благодарностей</Label>
                    <p className="text-sm text-muted-foreground">Показывать имена благотворителей</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Настройки монетизации</CardTitle>
                <CardDescription>Управляйте способами получения дохода</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Подписки</Label>
                    <p className="text-sm text-muted-foreground">Разрешить читателям оформлять подписку</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Платные главы</Label>
                    <p className="text-sm text-muted-foreground">Продавать отдельные главы</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Донаты</Label>
                    <p className="text-sm text-muted-foreground">Принимать добровольные пожертвования</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Вывод средств</CardTitle>
                <CardDescription>Настройте способ получения выплат</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Способ вывода</Label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="cursor-pointer hover:shadow-lg transition-all border-2 border-primary">
                      <CardContent className="p-4 text-center">
                        <Icon name="CreditCard" className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <div className="font-semibold">Банковская карта</div>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:shadow-lg transition-all">
                      <CardContent className="p-4 text-center">
                        <Icon name="Wallet" className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <div className="font-semibold">Электронный кошелек</div>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer hover:shadow-lg transition-all">
                      <CardContent className="p-4 text-center">
                        <Icon name="Building" className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <div className="font-semibold">Банковский счет</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <Button size="lg" className="w-full">
                  <Icon name="Download" className="w-4 h-4 mr-2" />
                  Вывести ₽94,229
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Monetization;
