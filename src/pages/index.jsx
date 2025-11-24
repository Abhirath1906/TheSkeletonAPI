import React, { useEffect, useState } from "react"
import { Layout, Divider, Table, Skeleton, message, Button } from "antd"


const { Header, Content } = Layout

export default function Home() {
  const [TheApi, setTheApi] = useState([])
  const [loading, setLoading] = useState(true)



  async function fetchApi() {
    setLoading(true)
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await res.json()
      setTheApi(data)
    } catch {
      message.error("Error bro")
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {

    fetchApi()
  }, [])

  const cl = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },

  ]

  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "black", color: "white" }}>
          <p style={{ fontSize: "30px" }}>ABYSSSKEL</p>
        </Header>

        <Content style={{ padding: "50px", backgroundColor: "white" }}>
          <p style={{ fontSize: "40px", fontWeight: "500" }}>The List</p>
          <Divider />

          <Button style={{marginBottom:"10px"}} type="primary" onClick={fetchApi}>Refreshh.....</Button>

          {loading ? (
            <Skeleton active paragraph={{ rows: 15 }} />
          ) : (
            <Table
              columns={cl}
              dataSource={TheApi}
              rowKey="id"
            />
          )}

        </Content>
      </Layout>
    </>
  )
}
