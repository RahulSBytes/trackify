'use client'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet
} from '../ui/field'
import { Checkbox } from '../ui/checkbox'
import { FIELD_INFO } from '@/constants'

export default function MoreFields() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant='secondary'>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className='flex max-h-[85vh] flex-col px-10'>
        <DrawerHeader>
          <DrawerTitle>Add More Fields</DrawerTitle>
          <DrawerDescription>
            Choose optional details to include for this job application.
          </DrawerDescription>
        </DrawerHeader>

        <div className='min-h-0 flex-1 overflow-y-auto p-4 custom-scrollbar'>
          <FieldSet>
            <FieldLegend variant='label'>Additional fields</FieldLegend>
            <FieldDescription>
              Select the fields you'd like to add to this application.
            </FieldDescription>
            <FieldGroup className='grid grid-cols-1 gap-3 md:grid-cols-2'>
              {FIELD_INFO.map(({ label, description }) => (
                <Field
                  key={label}
                  orientation='horizontal'
                  className='max-h-xl'
                >
                  <Checkbox
                    id={`checkbox-${label}`}
                    name={`checkbox-${label}`}
                    className='self-start'
                  />
                  <div>
                    <FieldLabel
                      htmlFor={`checkbox-${label}`}
                      className='font-normal'
                    >
                      {label}
                    </FieldLabel>
                    <FieldDescription>{description}</FieldDescription>
                  </div>
                </Field>
              ))}
            </FieldGroup>
          </FieldSet>
        </div>

        <DrawerFooter className='shrink-0'>
          <Button>Insert</Button>
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
