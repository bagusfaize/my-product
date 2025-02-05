
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-5 pt-5 pb-16 md:w-2/3 lg:w-1/2 m-auto">
        {children}
    </div>
  )
}
