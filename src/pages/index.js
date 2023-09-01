import Bars from '@/components/bars';
import Content from '@/components/content';
import '@/assets/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="overflow-hidden vh-100 vw-100">
      <Bars></Bars>
      <Content></Content>
    </div>
      
  )
}
