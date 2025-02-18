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
import type { BundleIdPlatform } from './BundleIdPlatform';
import {
    BundleIdPlatformFromJSON,
    BundleIdPlatformFromJSONTyped,
    BundleIdPlatformToJSON,
} from './BundleIdPlatform';
import type { CertificateType } from './CertificateType';
import {
    CertificateTypeFromJSON,
    CertificateTypeFromJSONTyped,
    CertificateTypeToJSON,
} from './CertificateType';

/**
 * 
 * @export
 * @interface CertificateAttributes
 */
export interface CertificateAttributes {
    /**
     * 
     * @type {string}
     * @memberof CertificateAttributes
     */
    name?: string;
    /**
     * 
     * @type {CertificateType}
     * @memberof CertificateAttributes
     */
    certificateType?: CertificateType;
    /**
     * 
     * @type {string}
     * @memberof CertificateAttributes
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateAttributes
     */
    serialNumber?: string;
    /**
     * 
     * @type {BundleIdPlatform}
     * @memberof CertificateAttributes
     */
    platform?: BundleIdPlatform;
    /**
     * 
     * @type {Date}
     * @memberof CertificateAttributes
     */
    expirationDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof CertificateAttributes
     */
    certificateContent?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CertificateAttributes
     */
    activated?: boolean;
}

/**
 * Check if a given object implements the CertificateAttributes interface.
 */
export function instanceOfCertificateAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CertificateAttributesFromJSON(json: any): CertificateAttributes {
    return CertificateAttributesFromJSONTyped(json, false);
}

export function CertificateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'certificateType': !exists(json, 'certificateType') ? undefined : CertificateTypeFromJSON(json['certificateType']),
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'serialNumber': !exists(json, 'serialNumber') ? undefined : json['serialNumber'],
        'platform': !exists(json, 'platform') ? undefined : BundleIdPlatformFromJSON(json['platform']),
        'expirationDate': !exists(json, 'expirationDate') ? undefined : (new Date(json['expirationDate'])),
        'certificateContent': !exists(json, 'certificateContent') ? undefined : json['certificateContent'],
        'activated': !exists(json, 'activated') ? undefined : json['activated'],
    };
}

export function CertificateAttributesToJSON(value?: CertificateAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'certificateType': CertificateTypeToJSON(value.certificateType),
        'displayName': value.displayName,
        'serialNumber': value.serialNumber,
        'platform': BundleIdPlatformToJSON(value.platform),
        'expirationDate': value.expirationDate === undefined ? undefined : (value.expirationDate.toISOString()),
        'certificateContent': value.certificateContent,
        'activated': value.activated,
    };
}

