import { Button, Flex, Layout } from 'antd';

export const HomeScreen = () => (
  <Flex gap="middle" wrap>
     <Layout >
      <Layout.Header ><Button type="primary">12323</Button></Layout.Header>
      <Layout.Content >Content</Layout.Content>
      <Layout.Footer >Footer</Layout.Footer>
     </Layout>
  </Flex>
)