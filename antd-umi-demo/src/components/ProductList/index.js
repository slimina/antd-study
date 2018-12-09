import {Table,Popconfirm,Button}  from "antd";
import "./index.css"

const ProductList =({dispatch,onDelete,products})=>{
  const columns =[{
    title: '名称',
    dataIndex: 'name',
  },{
    title : "操作",
    render:(text,record)=>{
        return (
          <div>
            <Popconfirm title="删除?" onConfirm={()=>onDelete(record.id)} >
              <Button>删除</Button>
            </Popconfirm>
            <Button onClick={()=>{
              dispatch({
                type:'products/add'
              });
            }}>增加</Button>
          </div>
        );
    },
  }];
  return (
    <Table dataSource={products} rowKey={record => record.id} columns={columns}/>
  );
};

export  default ProductList;
