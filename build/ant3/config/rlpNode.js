"use strict";var total_node_count={name:"total_node_count",type:"decimal"},total_consensus_node_count={name:"total_consensus_node_count",type:"decimal"},total_non_consensus_node_count={name:"total_non_consensus_node_count",type:"decimal"},total_connected_consensus_node_count={name:"total_connected_consensus_node_count",type:"decimal"},total_connected_non_consensus_node_count={name:"total_connected_non_consensus_node_count",type:"decimal"},isConnected={name:"isConnected",type:"decimal"},node_id={name:"node_id",type:"bytes",value:"0x00"},access_ip={name:"ip",type:"string"},access_port={name:"port",type:"decimal"},public_key={name:"public_key",type:"bytes"},node_role={name:"node_role",type:"decimal"},node_state={name:"node_state",type:"decimal"},endpoints=[access_ip,access_port];endpoints.name="endpoints",endpoints.type="array";var Node_info=[node_id,public_key,node_role,node_state,endpoints],Node_status=[Node_info,isConnected];Node_status.name="node_status",Node_status.type="array";var P2pStatus=[total_node_count,total_consensus_node_count,total_non_consensus_node_count,total_connected_consensus_node_count,total_connected_non_consensus_node_count,Node_status];P2pStatus.name="p2p_status";var NodeInfo=[node_id,public_key,node_role,node_state,endpoints];NodeInfo.name="node_info",NodeInfo.type="array",module.exports={total_node_count:total_node_count,total_consensus_node_count:total_consensus_node_count,total_non_consensus_node_count:total_non_consensus_node_count,total_connected_consensus_node_count:total_connected_consensus_node_count,total_connected_non_consensus_node_count:total_connected_non_consensus_node_count,isConnected:isConnected,node_id:node_id,access_ip:access_ip,access_port:access_port,public_key:public_key,node_role:node_role,node_state:node_state,Node_info:Node_info,Node_status:Node_status,P2pStatus:P2pStatus,NodeInfo:NodeInfo};