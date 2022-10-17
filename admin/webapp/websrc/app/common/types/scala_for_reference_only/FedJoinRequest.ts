// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { ClusterServerInfo, isClusterServerInfo } from './ClusterServerInfo';

export interface FedJoinRequest {
  name: string;
  server: string;
  port: number;
  join_token: string;
  joint_rest_info?: ClusterServerInfo;
  use_proxy?: string;
}

export function isFedJoinRequest(v: any): v is FedJoinRequest {
  return (
    ((typeof v['name']) === 'string') &&
    ((typeof v['server']) === 'string') &&
    ((typeof v['port']) === 'number') &&
    ((typeof v['join_token']) === 'string') &&
    (!v['joint_rest_info'] || (v['joint_rest_info'] && isClusterServerInfo(v['joint_rest_info']))) &&
    (!v['use_proxy'] || ((typeof v['use_proxy']) === 'string'))
  );
}