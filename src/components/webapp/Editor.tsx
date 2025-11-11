import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Editor = () => {
  const [title, setTitle] = useState('Моя новая книга');
  const [content, setContent] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const handleContentChange = (text: string) => {
    setContent(text);
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const chars = text.length;
    const pages = Math.ceil(words / 250);
    
    setWordCount(words);
    setCharCount(chars);
    setPageCount(pages);
  };

  const chapters = [
    { id: 1, title: 'Глава 1: Начало', words: 2500, status: 'published' },
    { id: 2, title: 'Глава 2: Встреча', words: 3200, status: 'draft' },
    { id: 3, title: 'Глава 3: Тайна', words: 1800, status: 'draft' },
  ];

  return (
    <div className="min-h-screen">
      <div className="border-b bg-background/95 backdrop-blur-sm sticky top-16 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="ArrowLeft" className="w-5 h-5" />
              </Button>
              <div>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-xl font-bold border-none shadow-none px-0 h-auto"
                />
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                  <span>Сохранено 2 мин назад</span>
                  <Badge variant="outline" className="gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Черновик
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Icon name="Eye" className="w-4 h-4 mr-2" />
                Предпросмотр
              </Button>
              <Button>
                <Icon name="Upload" className="w-4 h-4 mr-2" />
                Опубликовать
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-1 h-fit">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="List" className="w-4 h-4" />
                    Главы
                  </h3>
                  <div className="space-y-2">
                    {chapters.map((chapter) => (
                      <div
                        key={chapter.id}
                        className="p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm line-clamp-1">{chapter.title}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {chapter.words} слов
                            </div>
                          </div>
                          {chapter.status === 'published' && (
                            <Icon name="CheckCircle2" className="w-4 h-4 text-green-500 flex-shrink-0" />
                          )}
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      <Icon name="Plus" className="w-4 h-4 mr-2" />
                      Новая глава
                    </Button>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="BarChart3" className="w-4 h-4" />
                    Статистика
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Слова</span>
                      <span className="font-semibold">{wordCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Символы</span>
                      <span className="font-semibold">{charCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Страницы</span>
                      <span className="font-semibold">{pageCount}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Target" className="w-4 h-4" />
                    Цель дня
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="font-medium">1,200 / 2,000</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-secondary w-[60%]" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-3">
            <Tabs defaultValue="write" className="space-y-6">
              <TabsList>
                <TabsTrigger value="write">
                  <Icon name="PenTool" className="w-4 h-4 mr-2" />
                  Написание
                </TabsTrigger>
                <TabsTrigger value="format">
                  <Icon name="Type" className="w-4 h-4 mr-2" />
                  Форматирование
                </TabsTrigger>
                <TabsTrigger value="notes">
                  <Icon name="StickyNote" className="w-4 h-4 mr-2" />
                  Заметки
                </TabsTrigger>
              </TabsList>

              <TabsContent value="write" className="space-y-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="border-b p-4 flex items-center gap-2 flex-wrap">
                      <Button variant="ghost" size="sm">
                        <Icon name="Bold" className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Icon name="Italic" className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Icon name="Underline" className="w-4 h-4" />
                      </Button>
                      <Separator orientation="vertical" className="h-6" />
                      <Button variant="ghost" size="sm">
                        <Icon name="Heading1" className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Icon name="Heading2" className="w-4 h-4" />
                      </Button>
                      <Separator orientation="vertical" className="h-6" />
                      <Button variant="ghost" size="sm">
                        <Icon name="Quote" className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Icon name="List" className="w-4 h-4" />
                      </Button>
                    </div>
                    <Textarea
                      placeholder="Начните писать свою историю..."
                      value={content}
                      onChange={(e) => handleContentChange(e.target.value)}
                      className="min-h-[600px] border-none rounded-none text-lg leading-relaxed resize-none focus-visible:ring-0"
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="format">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Размер шрифта</label>
                        <Input type="number" defaultValue="16" className="max-w-xs" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Межстрочный интервал</label>
                        <Input type="number" step="0.1" defaultValue="1.5" className="max-w-xs" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Ширина текста</label>
                        <Input type="number" defaultValue="800" className="max-w-xs" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes">
                <Card>
                  <CardContent className="p-6">
                    <Textarea
                      placeholder="Заметки о сюжете, персонажах, идеи..."
                      className="min-h-[400px]"
                    />
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

export default Editor;
