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
import type { BetaAppClipInvocationCreateRequestDataAttributes } from './BetaAppClipInvocationCreateRequestDataAttributes';
import {
    BetaAppClipInvocationCreateRequestDataAttributesFromJSON,
    BetaAppClipInvocationCreateRequestDataAttributesFromJSONTyped,
    BetaAppClipInvocationCreateRequestDataAttributesToJSON,
} from './BetaAppClipInvocationCreateRequestDataAttributes';
import type { BetaAppClipInvocationCreateRequestDataRelationships } from './BetaAppClipInvocationCreateRequestDataRelationships';
import {
    BetaAppClipInvocationCreateRequestDataRelationshipsFromJSON,
    BetaAppClipInvocationCreateRequestDataRelationshipsFromJSONTyped,
    BetaAppClipInvocationCreateRequestDataRelationshipsToJSON,
} from './BetaAppClipInvocationCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationCreateRequestData
 */
export interface BetaAppClipInvocationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationCreateRequestData
     */
    type: BetaAppClipInvocationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {BetaAppClipInvocationCreateRequestDataAttributes}
     * @memberof BetaAppClipInvocationCreateRequestData
     */
    attributes: BetaAppClipInvocationCreateRequestDataAttributes;
    /**
     * 
     * @type {BetaAppClipInvocationCreateRequestDataRelationships}
     * @memberof BetaAppClipInvocationCreateRequestData
     */
    relationships: BetaAppClipInvocationCreateRequestDataRelationships;
}


/**
 * @export
 */
export const BetaAppClipInvocationCreateRequestDataTypeEnum = {
    BetaAppClipInvocations: 'betaAppClipInvocations'
} as const;
export type BetaAppClipInvocationCreateRequestDataTypeEnum = typeof BetaAppClipInvocationCreateRequestDataTypeEnum[keyof typeof BetaAppClipInvocationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaAppClipInvocationCreateRequestData interface.
 */
export function instanceOfBetaAppClipInvocationCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function BetaAppClipInvocationCreateRequestDataFromJSON(json: any): BetaAppClipInvocationCreateRequestData {
    return BetaAppClipInvocationCreateRequestDataFromJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': BetaAppClipInvocationCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': BetaAppClipInvocationCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function BetaAppClipInvocationCreateRequestDataToJSON(value?: BetaAppClipInvocationCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': BetaAppClipInvocationCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': BetaAppClipInvocationCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

