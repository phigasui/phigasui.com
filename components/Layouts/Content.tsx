import { Card } from '../Card/Card'
import { Header } from '../Header/Header'


export const ContentLayout = ({ children }) => (
  <Card>
    <Header />
    {children}
  </Card>
)
