let messages=[
    {
        id:1,
        text:"Hello welcome to the chat app",
        user:"John",
        timestamp: new Date().toISOString()
    },

    {
        id:2,
        text:"Hello welcome to the chat app",
        user:"Kamal",
        timestamp: new Date().toISOString()
    },
    
    ];

    const getMessages=(req,res)=>{
        try{
            res.json({
                success:true,
                count:messages.length,
                data:messages
            })
        }
        catch(error){
            res.status(500).json({
                success:false,
                message:"Server Error",
                error:error.message
            })
        }
    }

    const createMessage=(req,res)=>{
        try{
            const {text,user}=req.body;
            if(!text || !user){
                return res.status(400).json({
                    success:false,
                    message:"Text and user are required"
                })
            }
            const newMessage={
                id:messages.length + 1,
                text,       
                user,
                timestamp:new Date().toISOString()
            };
            messages.push(newMessage);
            res.status(201).json({
                success:true,
                message:"Message created successfully",
                data:newMessage
            });
        }
            catch(error){
                res.status(500).json({
                    success:false,
                    message:"Server Error",
                    error:error.message
                })
            }
    }

    const deleteMessage=(req,res)=>{
        try{
            messages=[];
            res.json({
                success:true,
                message:"All messages deleted successfully"
            })
        } catch(error){
            res.status(500).json({
                success:false,

                message:"Server Error",
                error:error.message
            })
        }
    }  

    const addMessage=(messageData)=>{
        const newMessage={
            id:messages.length + 1,
            text:messageData.text,
            user:messageData.user,
            timestamp:new Date().toISOString()
        };
        messages.push(newMessage);
        return newMessage;
    }

     module.exports={
        getMessages,
        createMessage,
        deleteMessage,
        addMessage
     }
