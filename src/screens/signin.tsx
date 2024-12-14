// Example of a valid Signin component
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import amico from '../assets/Veterinary-amico.svg';
import bro from '../assets/Veterinary-bro.svg';
import cuante from '../assets/Veterinary-cuate.svg';
import rafiki from '../assets/Veterinary-rafiki.svg';

import React from 'react';

export const Signin: React.FC = () => {
  return (
    <main className="h-screen flex w-full">
      <div className='bg-primary-foreground w-full h-full items-center justify-center flex p-16'>
        <Carousel className="w-full max-w-xl">
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square p-8">
                <img src={amico} alt="Veterinary Amico"/>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex aspect-square p-8">
                <img src={bro} alt="Veterinary bro"/>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex aspect-square p-8">
                <img src={cuante} alt="Veterinary cuante"/>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex aspect-square p-8">
                <img src={rafiki} alt="Veterinary rafiki"/>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </div>
      <section className='flex items-center justify-center bg-background max-w-3xl h-full w-full p-4 '>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tighter">
              Entre com sua conta
            </CardTitle>
            
            <CardDescription>
              Utilize Seu e-mail e senha ou G-mail para entrar.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="example@email.com" type="email"/>
            </div>

            <div className="mt-4">
              <Label htmlFor='password'>Password</Label>
              <Input id='password' placeholder='Password' type="password"/>
            </div>

            <Button className="mt-6 w-full">Sing-In</Button>    

            <div className="flex items-center gap-6 mt-4">
              <Separator/>
              <span className="text-xs text-muted-foreground">
                OU
              </span>
              <Separator/>
            </div>

            <Button variant="outline" className="mt-6 w-full "><GitHubLogoIcon className="mr-2"/>Entrar com o GitHub</Button>
          </CardContent>

          <CardFooter>
            <p className="text-muted-foreground text-center text-sm">Ao Entrar em nossa plataforma você concorda com nossos termos de Uso e Política de Privacidade.</p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
};