import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4 gap-4">
      <Image src="/logo-dark.svg" alt="Youtube" width={350} height={350} className="hidden dark:block" />
      <Image src="/logo.svg" alt="Youtube" width={350} height={350} className="block dark:hidden" />
    </div>
  )
}
