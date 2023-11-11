import HeroContainer from '@/components/HeroContainer/HeroContainer'
import WhyGrademic from '@/components/WhyGrademic/WhyGrademic'
import PageWithNavbar from '@/layout/PageWithNavbar'


export default function Home() {
  return (
   <PageWithNavbar>
      <div className='min-h-screen'>

      <HeroContainer/>
      </div>
      <WhyGrademic/>
      
   </PageWithNavbar>
  )
}
