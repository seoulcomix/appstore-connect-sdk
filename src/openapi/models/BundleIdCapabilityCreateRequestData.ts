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
import type { BundleIdCapabilityCreateRequestDataAttributes } from './BundleIdCapabilityCreateRequestDataAttributes';
import {
    BundleIdCapabilityCreateRequestDataAttributesFromJSON,
    BundleIdCapabilityCreateRequestDataAttributesFromJSONTyped,
    BundleIdCapabilityCreateRequestDataAttributesToJSON,
} from './BundleIdCapabilityCreateRequestDataAttributes';
import type { BundleIdCapabilityCreateRequestDataRelationships } from './BundleIdCapabilityCreateRequestDataRelationships';
import {
    BundleIdCapabilityCreateRequestDataRelationshipsFromJSON,
    BundleIdCapabilityCreateRequestDataRelationshipsFromJSONTyped,
    BundleIdCapabilityCreateRequestDataRelationshipsToJSON,
} from './BundleIdCapabilityCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface BundleIdCapabilityCreateRequestData
 */
export interface BundleIdCapabilityCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BundleIdCapabilityCreateRequestData
     */
    type: BundleIdCapabilityCreateRequestDataTypeEnum;
    /**
     * 
     * @type {BundleIdCapabilityCreateRequestDataAttributes}
     * @memberof BundleIdCapabilityCreateRequestData
     */
    attributes: BundleIdCapabilityCreateRequestDataAttributes;
    /**
     * 
     * @type {BundleIdCapabilityCreateRequestDataRelationships}
     * @memberof BundleIdCapabilityCreateRequestData
     */
    relationships: BundleIdCapabilityCreateRequestDataRelationships;
}


/**
 * @export
 */
export const BundleIdCapabilityCreateRequestDataTypeEnum = {
    BundleIdCapabilities: 'bundleIdCapabilities'
} as const;
export type BundleIdCapabilityCreateRequestDataTypeEnum = typeof BundleIdCapabilityCreateRequestDataTypeEnum[keyof typeof BundleIdCapabilityCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the BundleIdCapabilityCreateRequestData interface.
 */
export function instanceOfBundleIdCapabilityCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function BundleIdCapabilityCreateRequestDataFromJSON(json: any): BundleIdCapabilityCreateRequestData {
    return BundleIdCapabilityCreateRequestDataFromJSONTyped(json, false);
}

export function BundleIdCapabilityCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCapabilityCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': BundleIdCapabilityCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': BundleIdCapabilityCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function BundleIdCapabilityCreateRequestDataToJSON(value?: BundleIdCapabilityCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': BundleIdCapabilityCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': BundleIdCapabilityCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

