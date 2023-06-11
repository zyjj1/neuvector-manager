export interface ScanSchedule {
  schedule: string;
  interval: number;
}

export interface AWSKey {
  secret_access_key: string;
  access_key_id: string;
  id: string;
  region: string;
}

export interface GCRKey {
  json_key: string;
}

export interface RegistryConfig {
  registry_type: string;
  registry: string;
  name: string;
  filters: string[];
  rescan_after_db_update: true;
  scan_layers: true;
  schedule: ScanSchedule;
  auth_with_token: boolean;
  password?: string;
  username?: string;
  jfrog_mode?: string;
  gitlab_external_url?: string;
  gitlab_private_token?: string;
  ibm_cloud_account?: string;
  auth_token?: string;
  aws_key?: AWSKey;
  gcr_key?: GCRKey;
  cfg_type?: string;
}

export interface RegistryPostBody {
  config: RegistryConfig;
}

export interface Summary {
  auth_token: string;
  auth_with_token: boolean;
  cvedb_create_time: string;
  cvedb_version: string;
  domains: string;
  error_detail: string;
  error_message: string;
  failed: number;
  filters: string[];
  gitlab_external_url: string;
  gitlab_private_token: string;
  ibm_cloud_account: string;
  ibm_cloud_token_url: string;
  jfrog_aql: boolean;
  jfrog_mode: string;
  name: string;
  password: string;
  registry: string;
  registry_type: string;
  repo_limit: number;
  rescan_after_db_update: boolean;
  scan_layers: boolean;
  scanned: number;
  scanning: number;
  schedule: {
    interval: number;
    schedule: string;
  };
  scheduled: number;
  started_at: string;
  status: string;
  tag_limit: number;
  username: string;
}

export interface RegistryGetResponse {
  summarys: Summary[];
}

export interface RegistryPatchBody {
  wrap: RegistryPostBody;
  name: string;
}

export interface Image {
  author: string;
  base_os: string;
  cvedb_create_time: string;
  digest: string;
  domain: string;
  envs: string[];
  high: number;
  image_id: string;
  labels: {};
  layers: [];
  medium: number;
  repository: string;
  result: string;
  run_as_root: true;
  scanned_at: string;
  scanned_timestamp: number;
  scanner_version: string;
  size: number;
  status: string;
  tag: string;
}

export interface RepoGetResponse {
  images: Image[];
}

export interface Vulnerability {
  cves: string[];
  description: string;
  feed_rating: string;
  fixed_version: string;
  in_base_image: boolean;
  last_modified_timestamp: number;
  link: string;
  name: string;
  package_name: string;
  package_version: string;
  published_timestamp: number;
  score: number;
  score_v3: number;
  severity: string;
  vectors: string;
  vectors_v3: string;
  tags?: string[];
}

export interface Layer {
  cmds: string;
  digest: string;
  size: number;
  verifiers: string[];
  vulnerabilities: Vulnerability[];
}

export interface LayerGetResponse {
  report: {
    layers: Layer[];
  };
}

export interface Check {
  automated: boolean;
  category: string;
  description: string;
  evidence: string;
  level: string;
  location: string;
  message: string[];
  profile: string;
  remediation: string;
  scored: boolean;
  tags: string[];
  test_number: string;
  type: string;
}

export interface CVES {
  name: string;
  status: string;
}

export interface Module {
  name: string;
  source: string;
  version: string;
  cves: CVES[];
}

export interface Secret {
  evidence: string;
  path: string;
  suggestion: string;
  type: string;
}

export interface SetIdPerms {
  evidence: string;
  path: string;
  type: string;
}

export interface ImageGetResponse {
  report: {
    checks: Check[];
    cmds: string[];
    verifiers: string[];
    envs: string[];
    labels: {
      [key: string]: string[];
    };
    modules: Module[];
    secrets: Secret[];
    setid_perms: SetIdPerms[];
    vulnerabilities: Vulnerability[];
  };
}

export interface EntryPostBody {
  config: {
    entries: [
      {
        name: string;
        days: number;
        comment: string;
        images: string[];
        domains: string[];
      }
    ];
    name: string;
  };
}
