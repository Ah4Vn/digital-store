const features = [
  {
    title: 'تضمین اصالت و قیمت کالا',
    icon: '✅',
  },
  {
    title: 'ارسال سریع به تمام نقاط کشور',
    icon: '📦',
  },
  {
    title: '۷ روز ضمانت بازگشت',
    icon: '🔄',
  },
  {
    title: 'پشتیبانی بر خط 24/7',
    icon: '🎧',
  },
];

export default function FeatureBoxes() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-10 md:p-6 rounded-lg'>
      {features.map((feature, index) => (
        <div
          key={index}
          className='flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg ring shadow-xl ring-gray-900/5 p-4'
        >
          <span className='text-2xl lg:text-4xl'>{feature.icon}</span>
          <p className='text-sm lg:text-base font-bold'>{feature.title}</p>
        </div>
      ))}
    </div>
  );
}
