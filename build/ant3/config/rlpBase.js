"use strict";var handshake=[[{name:"session_id"}]],hash={name:"hash",type:"hash"},timestamp={name:"timestamp",type:"decimal"},_from={name:"from",type:"hash"},to={name:"to",type:"hash"},gas_used={name:"gas_used",type:"decimal"},identity={name:"identity",type:"hash"},transaction_index={name:"transaction_index",type:"decimal"},level={name:"level",type:"decimal"},topic={name:"topic",type:"string"},msg_type={name:"msg_type",type:"decimal"},sequence={name:"sequence",type:"decimal"},group_id={name:"group_id",type:"bytes"},version={name:"version",type:"decimal"},return_code={name:"return_code",type:"decimal"},encrypted_tx={name:"encrypted_tx",type:"bytes"},Message=[msg_type],Request=[Message,sequence,group_id],Response=[Message,sequence,return_code,group_id];module.exports={handshake:handshake,hash:hash,timestamp:timestamp,_from:_from,to:to,gas_used:gas_used,identity:identity,transaction_index:transaction_index,level:level,topic:topic,msg_type:msg_type,sequence:sequence,group_id:group_id,version:version,return_code:return_code,encrypted_tx:encrypted_tx,Message:Message,Request:Request,Response:Response};