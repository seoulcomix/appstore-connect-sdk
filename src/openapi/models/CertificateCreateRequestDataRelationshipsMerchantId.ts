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
import type { CertificateCreateRequestDataRelationshipsMerchantIdData } from './CertificateCreateRequestDataRelationshipsMerchantIdData';
import {
    CertificateCreateRequestDataRelationshipsMerchantIdDataFromJSON,
    CertificateCreateRequestDataRelationshipsMerchantIdDataFromJSONTyped,
    CertificateCreateRequestDataRelationshipsMerchantIdDataToJSON,
} from './CertificateCreateRequestDataRelationshipsMerchantIdData';

/**
 * 
 * @export
 * @interface CertificateCreateRequestDataRelationshipsMerchantId
 */
export interface CertificateCreateRequestDataRelationshipsMerchantId {
    /**
     * 
     * @type {CertificateCreateRequestDataRelationshipsMerchantIdData}
     * @memberof CertificateCreateRequestDataRelationshipsMerchantId
     */
    data?: CertificateCreateRequestDataRelationshipsMerchantIdData;
}

/**
 * Check if a given object implements the CertificateCreateRequestDataRelationshipsMerchantId interface.
 */
export function instanceOfCertificateCreateRequestDataRelationshipsMerchantId(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CertificateCreateRequestDataRelationshipsMerchantIdFromJSON(json: any): CertificateCreateRequestDataRelationshipsMerchantId {
    return CertificateCreateRequestDataRelationshipsMerchantIdFromJSONTyped(json, false);
}

export function CertificateCreateRequestDataRelationshipsMerchantIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateCreateRequestDataRelationshipsMerchantId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CertificateCreateRequestDataRelationshipsMerchantIdDataFromJSON(json['data']),
    };
}

export function CertificateCreateRequestDataRelationshipsMerchantIdToJSON(value?: CertificateCreateRequestDataRelationshipsMerchantId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CertificateCreateRequestDataRelationshipsMerchantIdDataToJSON(value.data),
    };
}

