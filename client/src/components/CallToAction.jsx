import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-red-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-7xl font-extrabold gap-2'>
            Want to play with us?
            </h2>
            <p className='text-gray-500 my-2 font-extrabold'>
            Join our DISCORD chanel 
            </p>
            <Button gradientDuoTone='pinkToOrange' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://discord.gg/f6eYn8dd" target='_blank' rel='noopener noreferrer'>
                OUR DISCORD CHANEL
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://files.oaiusercontent.com/file-3Yl7Gl3rbiXSetATQz7RJMin?se=2024-09-05T13%3A56%3A08Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D74ff821c-7118-4404-a281-1b38c30f609c.webp&sig=/cmP%2BQQgURtwXZ1X/tRSD2CHapjTTvv0MNMZTs%2BhyDc%3D" />
        </div>
    </div>
  )
}