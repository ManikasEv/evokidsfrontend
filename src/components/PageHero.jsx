export default function PageHero({ title, breadcrumb }) {
  return (
    <div
      className="py-16 text-center"
      style={{ backgroundColor: '#bdd9ea' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-700 text-white uppercase tracking-wide drop-shadow-sm">
          {title}
        </h1>
        {breadcrumb && (
          <p className="text-white/80 text-sm mt-2 uppercase tracking-widest">
            {breadcrumb}
          </p>
        )}
      </div>
    </div>
  )
}
