var dataArray=[]

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { lastSelectedValue } = req.body;
  
      // Assuming you want to store lastSelectedValue in the array
      dataArray.push({ lastSelectedValue });
  
      console.log(lastSelectedValue);
      res.status(200).json({ success: true, data: dataArray });
    //   return dataArray
    }
  }
  export { dataArray };
  