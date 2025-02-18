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
import type { EndUserLicenseAgreementCreateRequestDataAttributes } from './EndUserLicenseAgreementCreateRequestDataAttributes';
import {
    EndUserLicenseAgreementCreateRequestDataAttributesFromJSON,
    EndUserLicenseAgreementCreateRequestDataAttributesFromJSONTyped,
    EndUserLicenseAgreementCreateRequestDataAttributesToJSON,
} from './EndUserLicenseAgreementCreateRequestDataAttributes';
import type { EndUserLicenseAgreementCreateRequestDataRelationships } from './EndUserLicenseAgreementCreateRequestDataRelationships';
import {
    EndUserLicenseAgreementCreateRequestDataRelationshipsFromJSON,
    EndUserLicenseAgreementCreateRequestDataRelationshipsFromJSONTyped,
    EndUserLicenseAgreementCreateRequestDataRelationshipsToJSON,
} from './EndUserLicenseAgreementCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface EndUserLicenseAgreementCreateRequestData
 */
export interface EndUserLicenseAgreementCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof EndUserLicenseAgreementCreateRequestData
     */
    type: EndUserLicenseAgreementCreateRequestDataTypeEnum;
    /**
     * 
     * @type {EndUserLicenseAgreementCreateRequestDataAttributes}
     * @memberof EndUserLicenseAgreementCreateRequestData
     */
    attributes: EndUserLicenseAgreementCreateRequestDataAttributes;
    /**
     * 
     * @type {EndUserLicenseAgreementCreateRequestDataRelationships}
     * @memberof EndUserLicenseAgreementCreateRequestData
     */
    relationships: EndUserLicenseAgreementCreateRequestDataRelationships;
}


/**
 * @export
 */
export const EndUserLicenseAgreementCreateRequestDataTypeEnum = {
    EndUserLicenseAgreements: 'endUserLicenseAgreements'
} as const;
export type EndUserLicenseAgreementCreateRequestDataTypeEnum = typeof EndUserLicenseAgreementCreateRequestDataTypeEnum[keyof typeof EndUserLicenseAgreementCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the EndUserLicenseAgreementCreateRequestData interface.
 */
export function instanceOfEndUserLicenseAgreementCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function EndUserLicenseAgreementCreateRequestDataFromJSON(json: any): EndUserLicenseAgreementCreateRequestData {
    return EndUserLicenseAgreementCreateRequestDataFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': EndUserLicenseAgreementCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': EndUserLicenseAgreementCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function EndUserLicenseAgreementCreateRequestDataToJSON(value?: EndUserLicenseAgreementCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': EndUserLicenseAgreementCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': EndUserLicenseAgreementCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

