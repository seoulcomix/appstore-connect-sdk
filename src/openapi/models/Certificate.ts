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
import type { CertificateAttributes } from './CertificateAttributes';
import {
    CertificateAttributesFromJSON,
    CertificateAttributesFromJSONTyped,
    CertificateAttributesToJSON,
} from './CertificateAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface Certificate
 */
export interface Certificate {
    /**
     * 
     * @type {string}
     * @memberof Certificate
     */
    type: CertificateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Certificate
     */
    id: string;
    /**
     * 
     * @type {CertificateAttributes}
     * @memberof Certificate
     */
    attributes?: CertificateAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof Certificate
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const CertificateTypeEnum = {
    Certificates: 'certificates'
} as const;
export type CertificateTypeEnum = typeof CertificateTypeEnum[keyof typeof CertificateTypeEnum];


/**
 * Check if a given object implements the Certificate interface.
 */
export function instanceOfCertificate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CertificateFromJSON(json: any): Certificate {
    return CertificateFromJSONTyped(json, false);
}

export function CertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): Certificate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : CertificateAttributesFromJSON(json['attributes']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function CertificateToJSON(value?: Certificate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': CertificateAttributesToJSON(value.attributes),
        'links': ResourceLinksToJSON(value.links),
    };
}

