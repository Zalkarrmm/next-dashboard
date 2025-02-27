'useClient'

import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Hooks() {

  const {
    push, // for replacing the user with saving the history
    refresh, // refresh the page
    prefetch, // prefetch some data
    replace, // for replacing the user with CLEANING THE HISTORY and he can't go back
    forward
  } = useRouter()

  const pathname = usePathname() // path name of actual route

  const searchParams = useSearchParams() // to get params in search queries

  const {slug} = useParams<{slug: string}>() 

   
}