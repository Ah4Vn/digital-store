export default function BrandPartnerships() {
  const brands = [
    { name: 'Brand 1', logo: '/brand-one.svg' },
    { name: 'Brand 2', logo: '/brand-second.svg' },
    { name: 'Brand 3', logo: '/brand-third.svg' },
  ];

  return (
    <div className='container mx-auto px-4 py-8 text-center'>
      <h2 className='text-2xl font-bold mb-4'>همکاری‌های داخلی و خارجی</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {brands.map((brand, index) => (
          <div
            key={index}
            className='flex items-center justify-center mx-auto p-4'
          >
            <img src={brand.logo} alt={brand.name} className='h-16 w-16' />
          </div>
        ))}
      </div>
    </div>
  );
}
