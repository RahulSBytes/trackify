import { Trash, Trash2Icon } from 'lucide-react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Badge } from '../ui/badge'

export function Alert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Badge
          variant='secondary'
          className='mt-2 flex gap-2 px-3 py-1 font-inter text-sm cursor-pointer'
        >
          Delete
          <Trash data-icon='inline-start' size={12} />
        </Badge>
      </AlertDialogTrigger>
      <AlertDialogContent size='sm'>
        <AlertDialogHeader>
          <AlertDialogMedia className='bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive'>
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete Application?</AlertDialogTitle>
          <AlertDialogDescription>
            Are we sure? This application may have a future... somewhere.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant='outline'>Cancel</AlertDialogCancel>
          <AlertDialogAction variant='destructive'>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
