import { Injectable } from '@angular/core';
import { GlobalVariable } from '@common/variables/global.variable';
import {
  ComplianceData,
  ComplianceNISTConfig,
  ComplianceNISTMap,
  ComplianceProfileData,
  ComplianceProfileTemplateData,
  VulnerabilityProfile,
  VulnerabilityProfileEntry,
  VulnerabilityProfilesData,
  WorkloadCompliance,
  VulnerabilitiesData,
  VulnerabilityQuery,
  VulnerabilitiesQueryData,
  VulnerabilitiesQuerySessionData,
  VulQueryOrderByColumnOption,
  OrderByOption,
} from '@common/types';
import { PathConstant } from '@common/constants/path.constant';
import { Observable } from 'rxjs';

@Injectable()
export class RisksHttpService {
  getCompliance(): Observable<ComplianceData> {
    return GlobalVariable.http.get<ComplianceData>(
      PathConstant.RISK_COMPLIANCE_URL
    );
  }

  postComplianceNIST(
    config: ComplianceNISTConfig
  ): Observable<ComplianceNISTMap> {
    return GlobalVariable.http.post<ComplianceNISTMap>(
      PathConstant.RISK_COMPLIANCE_NIST_URL,
      {
        config,
      }
    );
  }

  getVulnerabilities() {
    return GlobalVariable.http.get<VulnerabilitiesData>(
      PathConstant.RISK_CVE_URL
    );
  }

  postVulnerabilityQuery(query: VulnerabilityQuery) {
    let { last_modified_timestamp_option, ...vulQuery } = query;
    console.log(query);
    return GlobalVariable.http.post<VulnerabilitiesQueryData>(
      PathConstant.VUL_ASSET_URL,
      vulQuery
    );
  }

  getVulnerabilitiesQuery(params: {
    token: string;
    start: number;
    row: number;
    orderbyColumn?: VulQueryOrderByColumnOption;
    orderby?: OrderByOption;
  }) {
    return GlobalVariable.http.get<VulnerabilitiesQuerySessionData>(
      PathConstant.VUL_ASSET_URL,
      { params }
    );
  }

  getNodeCompliance(id: string): Observable<WorkloadCompliance> {
    return GlobalVariable.http.get<WorkloadCompliance>(
      PathConstant.NODE_COMPLIANCE_URL,
      { params: { id } }
    );
  }

  getContainerCompliance(id: string): Observable<WorkloadCompliance> {
    return GlobalVariable.http.get<WorkloadCompliance>(
      PathConstant.CONTAINER_COMPLIANCE_URL,
      { params: { id } }
    );
  }

  getCVEProfile(): Observable<VulnerabilityProfilesData> {
    return GlobalVariable.http.get<VulnerabilityProfilesData>(
      PathConstant.CVE_PROFILE
    );
  }

  postCVEProfile(config: VulnerabilityProfile): Observable<unknown> {
    return GlobalVariable.http.post(PathConstant.CVE_PROFILE_ENTRY, {
      config,
    });
  }

  patchCVEProfile(
    config: VulnerabilityProfileEntry,
    name: string
  ): Observable<unknown> {
    return GlobalVariable.http.patch(
      PathConstant.CVE_PROFILE_ENTRY,
      { config },
      { params: { name } }
    );
  }

  deleteCVEProfile(
    profile_name: string,
    entry_id: string
  ): Observable<unknown> {
    return GlobalVariable.http.delete(PathConstant.CVE_PROFILE_ENTRY, {
      params: { entry_id, profile_name },
    });
  }

  exportCVEProfile(payload) {
    return GlobalVariable.http.post(PathConstant.EXPORT_CVE_PROFILE, payload, {
      observe: 'response',
      responseType: 'text'
    });
  }

  getComplianceProfile(): Observable<ComplianceProfileData> {
    return GlobalVariable.http.get<ComplianceProfileData>(
      PathConstant.COMPLIANCE_PROFILE_URL
    );
  }

  patchComplianceProfile(payload) {
    return GlobalVariable.http.patch<ComplianceProfileData>(
      PathConstant.COMPLIANCE_PROFILE_URL,
      payload
    );
  }

  exportComplianceProfile(payload) {
    return GlobalVariable.http.post(
      PathConstant.EXPORT_COMPLIANCE_PROFILE,
      payload,
      { observe: 'response', responseType: 'text' }
    );
  }

  getComplianceProfileTemplate(): Observable<ComplianceProfileTemplateData> {
    return GlobalVariable.http.get<ComplianceProfileTemplateData>(
      PathConstant.COMPLIANCE_TEMPLATE_URL
    );
  }
}
