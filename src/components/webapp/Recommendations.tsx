import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Recommendations = () => {
  const forYou = [
    { title: 'Последний шанс', author: 'Елена Закатова', genre: 'Детектив', rating: 4.9, match: 95 },
    { title: 'Хроники забытых', author: 'Петр Хронов', genre: 'Фантастика', rating: 4.7, match: 92 },
    { title: 'Сердце зимы', author: 'Мария Романова', genre: 'Романтика', rating: 4.8, match: 88 },
  ];

  const trending = [
    { title: 'Тайна старинного замка', author: 'Дмитрий Мистер', reads: '25.3K', trend: '+340%' },
    { title: 'Между мирами', author: 'Иван Космов', reads: '18.7K', trend: '+285%' },
    { title: 'Последняя весна', author: 'Анна Светлова', reads: '15.2K', trend: '+210%' },
  ];

  const similar = [
    { title: 'Эхо прошлого', author: 'Виктор Память', reason: 'Похоже на "Тени прошлого"' },
    { title: 'Туманные дали', author: 'Ольга Далёкая', reason: 'Фанаты детективов оценят' },
    { title: 'Секреты города', author: 'Андрей Городской', reason: 'Тот же автор' },
  ];

  const newReleases = [
    { title: 'Рассвет новой эры', author: 'Сергей Новый', date: 'Сегодня' },
    { title: 'Путь к себе', author: 'Ирина Поиск', date: 'Вчера' },
    { title: 'Тени и свет', author: 'Максим Контраст', date: '2 дня назад' },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Рекомендации</h1>
          <p className="text-muted-foreground text-lg">Откройте новые произведения, созданные специально для вас</p>
        </div>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Icon name="Sparkles" className="w-6 h-6 text-primary" />
              Для вас
            </h2>
            <Button variant="ghost">
              <Icon name="Settings" className="w-4 h-4 mr-2" />
              Настроить предпочтения
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {forYou.map((book, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all group cursor-pointer">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <Badge variant="secondary">{book.genre}</Badge>
                    <Badge className="bg-green-500">{book.match}% совпадение</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <Button className="w-full">
                      <Icon name="BookOpen" className="w-4 h-4 mr-2" />
                      Начать читать
                    </Button>
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
                      <Icon name="Star" className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="text-sm font-medium">{book.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Icon name="TrendingUp" className="w-6 h-6 text-secondary" />
              Сейчас в тренде
            </h2>
            <Button variant="ghost">Все тренды</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trending.map((book, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-16 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className="font-bold line-clamp-2 mb-1">{book.title}</h3>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1">
                          <Icon name="Eye" className="w-4 h-4 text-muted-foreground" />
                          {book.reads}
                        </span>
                        <Badge className="bg-green-500">{book.trend}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon name="Layers" className="w-6 h-6 text-primary" />
              Похожие произведения
            </h2>

            <div className="space-y-4">
              {similar.map((book, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-bold mb-1">{book.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                        <Badge variant="outline" className="text-xs">{book.reason}</Badge>
                      </div>
                      <Button size="icon" variant="ghost">
                        <Icon name="Plus" className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon name="Zap" className="w-6 h-6 text-secondary" />
              Новинки
            </h2>

            <div className="space-y-4">
              {newReleases.map((book, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-bold mb-1">{book.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                        <Badge variant="secondary" className="text-xs">{book.date}</Badge>
                      </div>
                      <Button size="icon" variant="ghost">
                        <Icon name="Bookmark" className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
          <CardContent className="p-12 text-center">
            <Icon name="Lightbulb" className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Не нашли что искали?</h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Расскажите нам больше о ваших предпочтениях, и мы подберем идеальные произведения
            </p>
            <Button size="lg">
              <Icon name="Wand2" className="w-4 h-4 mr-2" />
              Улучшить рекомендации
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Recommendations;
