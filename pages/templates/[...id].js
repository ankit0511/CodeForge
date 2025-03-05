import Spinner from '@/components/Spinner';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import axios from 'axios';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'; // Assuming you're using a UI library like shadcn/ui

const TemplatePage = () => {
  const [templateInfo, setTemplateInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!id) {
      return;
    }
    axios.get('/api/template?id=' + id).then((response) => {
      setTemplateInfo(response.data);
      setLoading(false);
    });
  }, [id]);

  const handleLivePreviewClick = () => {
    if (!templateInfo?.deployedLink) {
      setIsModalOpen(true); // Open modal if no live preview link
    } else {
      window.open(templateInfo.deployedLink, '_blank'); // Open live preview link
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <section className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div className="lg:col-span-1 lg:fixed top-36 lg:block w-full lg:w-auto">
            <Link href={'/projects'} className="flex text-md items-center mb-3 text-gray-500 font-bold dark:text-white">
              <MoveLeft className="mr-2" />
              Go back
            </Link>
            <Badge variant={'outline'} className={'flex items-center justify-start gap-2'}>
              <Avatar className="my-4" size="large">
                <AvatarImage src={templateInfo?.user.image} alt={templateInfo?.user.name} />
              </Avatar>
              <h1 className="text-xl font-bold text-gray-700 dark:text-white">
                {templateInfo?.user.name}
              </h1>
            </Badge>
            <h2 className="text-2xl font-semibold my-6">{templateInfo?.title}</h2>
            <div className="border-b p-3 text-gray-500 text-md flex justify-between dark:text-white">
              <p className="text-md font-medium">Frontend</p>
              <p className="text-md text-gray-600 dark:text-white">{templateInfo?.framework}</p>
            </div>
            <div className="border-b p-3 text-gray-500 text-md flex justify-between dark:text-white">
              <p className="text-md font-medium">Backend </p>
              <p className="text-md text-gray-600 dark:text-white">{templateInfo?.css}</p>
            </div>
            <div className="border-b p-3 text-gray-500 text-md flex justify-between dark:text-white">
              <p className="text-md font-medium">Use Case</p>
              <p className="text-md text-gray-600 dark:text-white">{templateInfo?.useCase}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center text-center mt-6">
              <a href={templateInfo?.repositoryLink} target="_blank" style={{ width: '100%' }} className="sm:w-40">
                <Button variant="outline" className="w-full">
                  View Code
                </Button>
              </a>
              <div style={{ width: '100%' }} className="sm:w-40">
                <Button className="w-full" onClick={handleLivePreviewClick}>
                  Live Preview
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-2 lg:ml-[350px] border-l border-gray-300 w-full">
            <div className="px-8">
              <Carousel className="col-span-2">
                <CarouselContent>
                  {templateInfo?.images.map((img) => (
                    <CarouselItem key={img}>
                      <Image
                        src={img}
                        width={707}
                        height={400}
                        layout="responsive"
                        quality={100}
                        className="mb-6 mt-2 w-full object-cover rounded-md shadow"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 cursor-pointer" />
                <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 cursor-pointer" />
              </Carousel>
              <div className="id_details" dangerouslySetInnerHTML={{ __html: templateInfo?.description }} />
            </div>
          </div>
        </div>
      </section>

      {/* Modal for No Live Preview */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>No Live Preview Available</DialogTitle>
            <DialogDescription>
              Unfortunately, there is no live preview available for this project.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TemplatePage;