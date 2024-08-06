import type { JsonObject } from '../../JsonType.js'
import type { GenericStatus } from '../Common.js'

export enum DataEnumType {
  string = 'string',
  decimal = 'decimal',
  integer = 'integer',
  dateTime = 'dateTime',
  boolean = 'boolean',
  OptionList = 'OptionList',
  SequenceList = 'SequenceList',
  MemberList = 'MemberList'
}

export enum BootReasonEnumType {
  ApplicationReset = 'ApplicationReset',
  FirmwareUpdate = 'FirmwareUpdate',
  LocalReset = 'LocalReset',
  PowerUp = 'PowerUp',
  RemoteReset = 'RemoteReset',
  ScheduledReset = 'ScheduledReset',
  Triggered = 'Triggered',
  Unknown = 'Unknown',
  Watchdog = 'Watchdog'
}

export enum OperationalStatusEnumType {
  Operative = 'Operative',
  Inoperative = 'Inoperative'
}

export enum OCPP20ConnectorStatusEnumType {
  Available = 'Available',
  Occupied = 'Occupied',
  Reserved = 'Reserved',
  Unavailable = 'Unavailable',
  Faulted = 'Faulted'
}

export enum OCPP20ConnectorEnumType {
  cCCS1 = 'cCCS1',
  cCCS2 = 'cCCS2',
  cG105 = 'cG105',
  cTesla = 'cTesla',
  cType1 = 'cType1',
  cType2 = 'cType2',
  s3091p16a = 's309-1P-16A',
  s3091p32a = 's309-1P-32A',
  s3093p16a = 's309-3P-16A',
  s3093p32a = 's309-3P-32A',
  sBS1361 = 'sBS1361',
  sCEE77 = 'sCEE-7-7',
  sType2 = 'sType2',
  sType3 = 'sType3',
  Other1PhMax16A = 'Other1PhMax16A',
  Other1PhOver16A = 'Other1PhOver16A',
  Other3Ph = 'Other3Ph',
  Pan = 'Pan',
  wInductive = 'wInductive',
  wResonant = 'wResonant',
  Undetermined = 'Undetermined',
  Unknown = 'Unknown'
}

export enum OCPP20IdTokenEnumType {
  Central = 'Central',
  eMAID = 'eMAID',
  ISO14443 = 'ISO14443',
  ISO15693 = 'ISO15693',
  KeyCode = 'KeyCode',
  Local = 'Local',
  MacAddress = 'MacAddress',
  NoAuthorization = 'NoAuthorization'
}

export enum OCPP20ReserveNowStatusEnumType {
  Accepted = 'Accepted',
  Faulted = 'Faulted',
  Occupied = 'Occupied',
  Rejected = 'Rejected',
  Unavailable = 'Unavailable'
}

export type GenericStatusEnumType = GenericStatus

export enum HashAlgorithmEnumType {
  SHA256 = 'SHA256',
  SHA384 = 'SHA384',
  SHA512 = 'SHA512'
}

export enum GetCertificateIdUseEnumType {
  V2GRootCertificate = 'V2GRootCertificate',
  MORootCertificate = 'MORootCertificate',
  CSMSRootCertificate = 'CSMSRootCertificate',
  V2GCertificateChain = 'V2GCertificateChain',
  ManufacturerRootCertificate = 'ManufacturerRootCertificate'
}

export enum GetCertificateStatusEnumType {
  Accepted = 'Accepted',
  Failed = 'Failed'
}

export enum GetInstalledCertificateStatusEnumType {
  Accepted = 'Accepted',
  NotFound = 'NotFound'
}

export enum InstallCertificateStatusEnumType {
  Accepted = 'Accepted',
  Rejected = 'Rejected',
  Failed = 'Failed'
}

export enum InstallCertificateUseEnumType {
  V2GRootCertificate = 'V2GRootCertificate',
  MORootCertificate = 'MORootCertificate',
  CSMSRootCertificate = 'CSMSRootCertificate',
  ManufacturerRootCertificate = 'ManufacturerRootCertificate'
}

export enum DeleteCertificateStatusEnumType {
  Accepted = 'Accepted',
  Failed = 'Failed',
  NotFound = 'NotFound'
}

export enum CertificateActionEnumType {
  Install = 'Install',
  Update = 'Update'
}

export enum CertificateSigningUseEnumType {
  ChargingStationCertificate = 'ChargingStationCertificate',
  V2GCertificate = 'V2GCertificate'
}

export type CertificateSignedStatusEnumType = GenericStatusEnumType

export interface CertificateHashDataType extends JsonObject {
  hashAlgorithm: HashAlgorithmEnumType
  issuerNameHash: string
  issuerKeyHash: string
  serialNumber: string
}

export interface CertificateHashDataChainType extends JsonObject {
  certificateType: GetCertificateIdUseEnumType
  certificateHashData: CertificateHashDataType
  childCertificateHashData?: CertificateHashDataType
}

export interface OCSPRequestDataType extends JsonObject {
  hashAlgorithm: HashAlgorithmEnumType
  issuerNameHash: string
  issuerKeyHash: string
  serialNumber: string
  responderURL: string
}

export interface StatusInfoType extends JsonObject {
  reasonCode: string
  additionalInfo?: string
}

export interface EVSEType extends JsonObject {
  id: number
  connectorId?: string
}

export interface OCPP20AdditionalInfoType extends JsonObject {
  additionalIdToken: string
  type: string
}

export interface OCPP20IdTokenType extends JsonObject {
  idToken: string
  type: OCPP20IdTokenEnumType
  additionalInfo?: OCPP20AdditionalInfoType[]
}
