import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const ladaModels = [
    'Granta',
    'Vesta',
    'Kalina',
    'Priora',
    'Largus',
    'XRAY',
    'Niva',
    '4x4',
    'Samara'
  ];

  const popularParts = [
    { 
      id: 1, 
      name: 'Тормозные колодки передние', 
      price: 1290, 
      image: '/img/1af505cb-1cef-460f-ba4c-3da2fbe12538.jpg',
      models: ['Granta', 'Kalina', 'Priora'],
      inStock: true
    },
    { 
      id: 2, 
      name: 'Масляный фильтр', 
      price: 320, 
      image: '/img/1af505cb-1cef-460f-ba4c-3da2fbe12538.jpg',
      models: ['Vesta', 'XRAY', 'Largus'],
      inStock: true
    },
    { 
      id: 3, 
      name: 'Свечи зажигания комплект', 
      price: 890, 
      image: '/img/1af505cb-1cef-460f-ba4c-3da2fbe12538.jpg',
      models: ['Granta', 'Vesta', 'Kalina'],
      inStock: false
    },
    { 
      id: 4, 
      name: 'Амортизатор передний', 
      price: 2450, 
      image: '/img/1af505cb-1cef-460f-ba4c-3da2fbe12538.jpg',
      models: ['Niva', '4x4'],
      inStock: true
    },
    { 
      id: 5, 
      name: 'Воздушный фильтр', 
      price: 450, 
      image: '/img/1af505cb-1cef-460f-ba4c-3da2fbe12538.jpg',
      models: ['Largus', 'XRAY'],
      inStock: true
    },
    { 
      id: 6, 
      name: 'Генератор', 
      price: 8900, 
      image: '/img/1af505cb-1cef-460f-ba4c-3da2fbe12538.jpg',
      models: ['Vesta', 'Granta'],
      inStock: true
    }
  ];

  const addToCart = (part: any) => {
    setCartItems([...cartItems, part]);
  };

  const removeFromCart = (partId: number) => {
    setCartItems(cartItems.filter(item => item.id !== partId));
  };

  const filteredParts = popularParts.filter(part => 
    part.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedModel === '' || part.models.includes(selectedModel))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Car" className="h-8 w-8 text-red-500" />
                <span className="text-2xl font-bold text-black">ЛадаПарт</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-red-500 transition-colors">Каталог</a>
              <a href="#cart" className="text-gray-700 hover:text-red-500 transition-colors">Корзина</a>
              <a href="#contacts" className="text-gray-700 hover:text-red-500 transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="relative">
                <Icon name="ShoppingCart" className="h-4 w-4" />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>
              <Button className="bg-red-500 hover:bg-red-600">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                Звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Автозапчасти для Лада</h1>
            <p className="text-xl mb-8 text-red-100">Оригинальные запчасти с гарантией качества</p>
            
            {/* Search and Model Selection */}
            <div className="max-w-4xl mx-auto">
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Поиск запчасти</label>
                    <Input
                      placeholder="Введите название запчасти..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Модель Лада</label>
                    <Select value={selectedModel} onValueChange={setSelectedModel}>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white">
                        <SelectValue placeholder="Выберите модель" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Все модели</SelectItem>
                        {ladaModels.map(model => (
                          <SelectItem key={model} value={model}>{model}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white">
                      <Icon name="Search" className="h-4 w-4 mr-2" />
                      Найти
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Parts Catalog */}
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Популярные запчасти</h2>
            <p className="text-gray-600">Самые востребованные детали для автомобилей Лада</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredParts.map(part => (
              <Card key={part.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={part.image} 
                    alt={part.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{part.name}</CardTitle>
                    <Badge variant={part.inStock ? "default" : "secondary"}>
                      {part.inStock ? 'В наличии' : 'Под заказ'}
                    </Badge>
                  </div>
                  <CardDescription>
                    Подходит для: {part.models.join(', ')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-500">{part.price}₽</span>
                    <Button 
                      onClick={() => addToCart(part)}
                      className="bg-red-500 hover:bg-red-600"
                      disabled={!part.inStock}
                    >
                      <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section id="cart" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Корзина</h2>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="ShoppingCart" className="h-5 w-5 mr-2" />
                Ваш заказ ({cartItems.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Корзина пуста</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">Модели: {item.models.join(', ')}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-red-500">{item.price}₽</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Icon name="X" className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-xl font-bold">Итого:</span>
                    <span className="text-2xl font-bold text-red-500">
                      {cartItems.reduce((sum, item) => sum + item.price, 0)}₽
                    </span>
                  </div>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                    <Icon name="CreditCard" className="h-4 w-4 mr-2" />
                    Оформить заказ
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Контакты</h2>
            <p className="text-gray-300">Свяжитесь с нами для консультации</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Icon name="Phone" className="h-5 w-5 mr-2 text-red-500" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">+7 (495) 123-45-67</p>
                <p className="text-gray-300">+7 (800) 555-01-23</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Icon name="MapPin" className="h-5 w-5 mr-2 text-red-500" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">г. Москва, ул. Автозаводская, 15</p>
                <p className="text-gray-300">Время работы: 9:00-21:00</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Icon name="Mail" className="h-5 w-5 mr-2 text-red-500" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">info@ladapart.ru</p>
                <p className="text-gray-300">sales@ladapart.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Car" className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold">ЛадаПарт</span>
            </div>
            <p className="text-gray-400">© 2024 ЛадаПарт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;