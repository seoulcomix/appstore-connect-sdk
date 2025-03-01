/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AppRelationshipsEndUserLicenseAgreementData
 */
export interface AppRelationshipsEndUserLicenseAgreementData {
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsEndUserLicenseAgreementData
     */
    type: AppRelationshipsEndUserLicenseAgreementDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsEndUserLicenseAgreementData
     */
    id: string;
}


/**
 * @export
 */
export const AppRelationshipsEndUserLicenseAgreementDataTypeEnum = {
    EndUserLicenseAgreements: 'endUserLicenseAgreements'
} as const;
export type AppRelationshipsEndUserLicenseAgreementDataTypeEnum = typeof AppRelationshipsEndUserLicenseAgreementDataTypeEnum[keyof typeof AppRelationshipsEndUserLicenseAgreementDataTypeEnum];


/**
 * Check if a given object implements the AppRelationshipsEndUserLicenseAgreementData interface.
 */
export function instanceOfAppRelationshipsEndUserLicenseAgreementData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppRelationshipsEndUserLicenseAgreementDataFromJSON(json: any): AppRelationshipsEndUserLicenseAgreementData {
    return AppRelationshipsEndUserLicenseAgreementDataFromJSONTyped(json, false);
}

export function AppRelationshipsEndUserLicenseAgreementDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsEndUserLicenseAgreementData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppRelationshipsEndUserLicenseAgreementDataToJSON(value?: AppRelationshipsEndUserLicenseAgreementData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

