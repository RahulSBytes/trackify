import React from 'react'

function InfoCard({heading,data}: {heading : string, data : Record<string, string | number>}) {
  
  return (
    <section className='mt-8'>
      <h3 className='mb-2 font-semibold'>{heading}</h3>
      <div className='flex-between bg-card p-5'>
        {Object.entries(data).map(
          ([key, value]) => (
            <div key={key} className='item-center flex flex-col gap-1'>
              <p className='text-sm text-foreground-muted'>{key}</p>
              <p className='font-semibold'>{value}</p>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default InfoCard
