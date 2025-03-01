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
import type { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON,
} from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import type { InAppPurchaseImageCreateRequestDataRelationships } from './InAppPurchaseImageCreateRequestDataRelationships';
import {
    InAppPurchaseImageCreateRequestDataRelationshipsFromJSON,
    InAppPurchaseImageCreateRequestDataRelationshipsFromJSONTyped,
    InAppPurchaseImageCreateRequestDataRelationshipsToJSON,
} from './InAppPurchaseImageCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface InAppPurchaseImageCreateRequestData
 */
export interface InAppPurchaseImageCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImageCreateRequestData
     */
    type: InAppPurchaseImageCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageCreateRequestDataAttributes}
     * @memberof InAppPurchaseImageCreateRequestData
     */
    attributes: AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    /**
     * 
     * @type {InAppPurchaseImageCreateRequestDataRelationships}
     * @memberof InAppPurchaseImageCreateRequestData
     */
    relationships: InAppPurchaseImageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const InAppPurchaseImageCreateRequestDataTypeEnum = {
    InAppPurchaseImages: 'inAppPurchaseImages'
} as const;
export type InAppPurchaseImageCreateRequestDataTypeEnum = typeof InAppPurchaseImageCreateRequestDataTypeEnum[keyof typeof InAppPurchaseImageCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseImageCreateRequestData interface.
 */
export function instanceOfInAppPurchaseImageCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function InAppPurchaseImageCreateRequestDataFromJSON(json: any): InAppPurchaseImageCreateRequestData {
    return InAppPurchaseImageCreateRequestDataFromJSONTyped(json, false);
}

export function InAppPurchaseImageCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseImageCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': InAppPurchaseImageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function InAppPurchaseImageCreateRequestDataToJSON(value?: InAppPurchaseImageCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': InAppPurchaseImageCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

