import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const books = [
    { id: 1, title: 'Тени прошлого', author: 'Анна Светлова', genre: 'Детектив', rating: 4.8, reads: '12.5K', chapters: 45 },
    { id: 2, title: 'Звёздный путь', author: 'Иван Космов', genre: 'Фантастика', rating: 4.9, reads: '10.2K', chapters: 32 },
    { id: 3, title: 'Осенний вальс', author: 'Мария Романова', genre: 'Романтика', rating: 4.7, reads: '9.8K', chapters: 28 },
    { id: 4, title: 'Эхо времени', author: 'Петр Хронов', genre: 'Фантастика', rating: 4.6, reads: '8.3K', chapters: 38 },
    { id: 5, title: 'Последний рассвет', author: 'Елена Закатова', genre: 'Драма', rating: 4.9, reads: '15.1K', chapters: 52 },
    { id: 6, title: 'Тайна старого особняка', author: 'Дмитрий Мистер', genre: 'Детектив', rating: 4.5, reads: '7.2K', chapters: 24 },
  ];

  const genres = ['Все', 'Фантастика', 'Детектив', 'Романтика', 'Драма', 'Триллер'];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Библиотека произведений</h1>
          <p className="text-muted-foreground text-lg">Открывайте новые миры через страницы книг</p>
        </div>

        <div className="mb-8 space-y-6">
          <div className="relative max-w-2xl">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Поиск по названию, автору или жанру..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg"
            />
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              {genres.map((genre) => (
                <TabsTrigger key={genre} value={genre.toLowerCase()}>
                  {genre}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((book) => (
                  <Card key={book.id} className="hover:shadow-lg transition-all cursor-pointer group">
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <Badge variant="secondary">{book.genre}</Badge>
                        <Button size="icon" variant="ghost" className="bg-white/90 hover:bg-white">
                          <Icon name="Heart" className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <Button className="w-full">
                          <Icon name="BookOpen" className="w-4 h-4 mr-2" />
                          Читать
                        </Button>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <h3 className="text-white font-bold text-lg line-clamp-2">{book.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Icon name="User" className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{book.author}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" className="w-4 h-4 text-amber-500 fill-amber-500" />
                          <span className="font-medium">{book.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="Eye" className="w-4 h-4" />
                          <span>{book.reads}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="FileText" className="w-4 h-4" />
                          <span>{book.chapters}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <div className="text-center max-w-2xl mx-auto">
            <Icon name="Sparkles" className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-2">Не можете найти что почитать?</h3>
            <p className="text-muted-foreground mb-6">
              Получите персональные рекомендации на основе ваших предпочтений
            </p>
            <Button size="lg">
              <Icon name="Wand2" className="w-4 h-4 mr-2" />
              Подобрать книгу
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
