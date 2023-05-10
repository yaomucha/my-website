import { useEffect, useState } from "react";

export default function Custom404() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://api.isoyu.com/gy/data.js").then(res => {
      return res.text()
    }).then(res => {
      const _data = res.split("var jsondata=")[1]
      setData(JSON.parse(_data).data)
    })

  }, [])

  return (<>
    {
      data.map(item => {
        return (
          <div>
            <div>
              <img src={item.child_pic} /> 
            </div>
            <div>{item.name}</div>
          </div>
        )
      })
    }
  </>);
}