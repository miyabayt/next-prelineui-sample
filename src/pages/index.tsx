import type { ReactElement } from 'react'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from '@/pages/_app'

const Page: NextPageWithLayout = () => (
  <div>
    <h1>Hello World!</h1>
  </div>
)

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
