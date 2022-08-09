import Link from 'next/link';

function Component() {
  return (
    <footer className='flex flex-col justify-center mt-auto bg-b-and-b-blue-500 text-slate-300 leading-8'>
      <div className='p-5 pb-8 flex gap-8 mx-auto max-w-6xl'>
        <div className='w-1/4'>
          <h3 className='font-serif font-bold text-lg mb-5 text-slate-50'>Quick links</h3>
        </div>
        <div className='w-1/4'>
          <h3 className='font-serif font-bold text-lg mb-5 text-slate-50'>Contact us</h3>
          <p>
            <a
              className='underline hover:text-slate-100 underline-offset-4'
              href='mailto:hello@bornandbraid.com'>
              hello@bornandbraid.com
            </a>
            <br />
            (973) 378-0880
          </p>
        </div>
        <div className='w-1/4'>
          <h3 className='font-serif font-bold text-lg mb-5 text-slate-50'>Come pick up</h3>
          <p className='mb-4'>
            Wednesday: 1 pm-4:30 pm
            <br />
            Friday: 11 am-3:00 pm
          </p>
          <p className='mb-4'>
            Maplewood Jewish Center
            <br /> 113 Parker Avenue
            <br /> Maplewood, NJ 07040
            <br />
            <a
              className='underline hover:text-slate-100 underline-offset-4'
              href='https://www.google.com/maps/place/113+Parker+Ave,+Maplewood,+NJ+07040/@40.732731,-74.257341,16z/data=!4m5!3m4!1s0x89c3acf313a10c7f:0x3d6c4de90041f22!8m2!3d40.7327314!4d-74.2573414?hl=en'>
              Get Directions
            </a>
          </p>
          <p>
            Feel free to park in the round-about directly in front of the main entrance. Street parking is
            also plentiful.
          </p>
        </div>
        <div className='w-1/4'>
          <h3 className='font-serif font-bold text-lg mb-5 text-slate-50'>Your weekly challah</h3>
          <p className='mb-4'>
            Born & Braid bakes kosher, artisanal challah and babka in the heart of SOMa, NJ. Place your order
            by 5 pm Monday for pickup Wednesday and by 5 pm Wednesday for pickup Friday.
          </p>
          <p className=''>Shipping and general local delivery are unavailable at this time.</p>
        </div>
      </div>
      <div className='px-5 py-7 w-full text-center border-t border-white/10 text-xs text-white/70'>
        © 2022, Born & Braid
      </div>
    </footer>
  );
}

export default Component;
