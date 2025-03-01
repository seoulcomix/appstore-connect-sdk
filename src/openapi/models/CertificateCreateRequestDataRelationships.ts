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
import type { CertificateCreateRequestDataRelationshipsMerchantId } from './CertificateCreateRequestDataRelationshipsMerchantId';
import {
    CertificateCreateRequestDataRelationshipsMerchantIdFromJSON,
    CertificateCreateRequestDataRelationshipsMerchantIdFromJSONTyped,
    CertificateCreateRequestDataRelationshipsMerchantIdToJSON,
} from './CertificateCreateRequestDataRelationshipsMerchantId';

/**
 * 
 * @export
 * @interface CertificateCreateRequestDataRelationships
 */
export interface CertificateCreateRequestDataRelationships {
    /**
     * 
     * @type {CertificateCreateRequestDataRelationshipsMerchantId}
     * @memberof CertificateCreateRequestDataRelationships
     */
    merchantId?: CertificateCreateRequestDataRelationshipsMerchantId;
}

/**
 * Check if a given object implements the CertificateCreateRequestDataRelationships interface.
 */
export function instanceOfCertificateCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CertificateCreateRequestDataRelationshipsFromJSON(json: any): CertificateCreateRequestDataRelationships {
    return CertificateCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function CertificateCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'merchantId': !exists(json, 'merchantId') ? undefined : CertificateCreateRequestDataRelationshipsMerchantIdFromJSON(json['merchantId']),
    };
}

export function CertificateCreateRequestDataRelationshipsToJSON(value?: CertificateCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'merchantId': CertificateCreateRequestDataRelationshipsMerchantIdToJSON(value.merchantId),
    };
}

