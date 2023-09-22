"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Progress } from "@nextui-org/progress";

import { GoHeart } from "react-icons/go";
import { GoHeartFill as HeartIcon } from "react-icons/go";
import { BsFillPauseCircleFill as PauseCircleIcon } from "react-icons/bs";
import { BsFillSkipEndFill as NextIcon } from "react-icons/bs";
import { BsFillSkipStartFill as PreviousIcon } from "react-icons/bs";
import { BsRepeat as RepeatOneIcon } from "react-icons/bs";
import { BsShuffle as ShuffleIcon } from "react-icons/bs";

export default function BCard() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]'
      shadow='sm'
    >
      <CardBody>
        <div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center'>
          <div className='relative col-span-6 md:col-span-4'>
            <Image
              alt='Album cover'
              className='object-cover'
              height={200}
              shadow='md'
              src='/avatars/avatar-1.png'
              width='100%'
            />
          </div>

          <div className='flex flex-col col-span-6 md:col-span-8'>
            <div className='flex justify-between items-start'>
              <div className='flex flex-col gap-0'>
                <h3 className='font-semibold text-foreground/90'>Daily Mix</h3>
                <p className='text-small text-foreground/80'>12 Tracks</p>
                <h1 className='text-large font-medium mt-2'>Frontend Radio</h1>
              </div>
              <Button
                isIconOnly
                className='text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2'
                radius='full'
                variant='light'
                onPress={() => setLiked((v) => !v)}
              >
                {liked ? <GoHeart /> : <HeartIcon />}
              </Button>
            </div>

            <div className='flex flex-col mt-3 gap-1'>
              <Progress
                aria-label='Music progress'
                classNames={{
                  indicator: "bg-default-800 dark:bg-white",
                  track: "bg-default-500/30",
                }}
                color='default'
                size='sm'
                value={33}
              />
              <div className='flex justify-between'>
                <p className='text-small'>1:23</p>
                <p className='text-small text-foreground/50'>4:32</p>
              </div>
            </div>

            <div className='flex w-full items-center justify-center'>
              <Button
                isIconOnly
                className='data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
              >
                <RepeatOneIcon className='text-foreground/80' />
              </Button>
              <Button
                isIconOnly
                className='data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
              >
                <PreviousIcon />
              </Button>
              <Button
                isIconOnly
                className='w-auto h-auto data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
              >
                <PauseCircleIcon size={54} />
              </Button>
              <Button
                isIconOnly
                className='data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
              >
                <NextIcon />
              </Button>
              <Button
                isIconOnly
                className='data-[hover]:bg-foreground/10'
                radius='full'
                variant='light'
              >
                <ShuffleIcon className='text-foreground/80' />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
