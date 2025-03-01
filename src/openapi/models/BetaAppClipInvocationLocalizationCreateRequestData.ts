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
import type { BetaAppClipInvocationLocalizationCreateRequestDataRelationships } from './BetaAppClipInvocationLocalizationCreateRequestDataRelationships';
import {
    BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSON,
    BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSONTyped,
    BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsToJSON,
} from './BetaAppClipInvocationLocalizationCreateRequestDataRelationships';
import type { BetaAppClipInvocationLocalizationInlineCreateAttributes } from './BetaAppClipInvocationLocalizationInlineCreateAttributes';
import {
    BetaAppClipInvocationLocalizationInlineCreateAttributesFromJSON,
    BetaAppClipInvocationLocalizationInlineCreateAttributesFromJSONTyped,
    BetaAppClipInvocationLocalizationInlineCreateAttributesToJSON,
} from './BetaAppClipInvocationLocalizationInlineCreateAttributes';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationLocalizationCreateRequestData
 */
export interface BetaAppClipInvocationLocalizationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationCreateRequestData
     */
    type: BetaAppClipInvocationLocalizationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {BetaAppClipInvocationLocalizationInlineCreateAttributes}
     * @memberof BetaAppClipInvocationLocalizationCreateRequestData
     */
    attributes: BetaAppClipInvocationLocalizationInlineCreateAttributes;
    /**
     * 
     * @type {BetaAppClipInvocationLocalizationCreateRequestDataRelationships}
     * @memberof BetaAppClipInvocationLocalizationCreateRequestData
     */
    relationships: BetaAppClipInvocationLocalizationCreateRequestDataRelationships;
}


/**
 * @export
 */
export const BetaAppClipInvocationLocalizationCreateRequestDataTypeEnum = {
    BetaAppClipInvocationLocalizations: 'betaAppClipInvocationLocalizations'
} as const;
export type BetaAppClipInvocationLocalizationCreateRequestDataTypeEnum = typeof BetaAppClipInvocationLocalizationCreateRequestDataTypeEnum[keyof typeof BetaAppClipInvocationLocalizationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationCreateRequestData interface.
 */
export function instanceOfBetaAppClipInvocationLocalizationCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function BetaAppClipInvocationLocalizationCreateRequestDataFromJSON(json: any): BetaAppClipInvocationLocalizationCreateRequestData {
    return BetaAppClipInvocationLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': BetaAppClipInvocationLocalizationInlineCreateAttributesFromJSON(json['attributes']),
        'relationships': BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function BetaAppClipInvocationLocalizationCreateRequestDataToJSON(value?: BetaAppClipInvocationLocalizationCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': BetaAppClipInvocationLocalizationInlineCreateAttributesToJSON(value.attributes),
        'relationships': BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

