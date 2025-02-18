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
import type { BetaAppClipInvocationLocalizationUpdateRequestDataAttributes } from './BetaAppClipInvocationLocalizationUpdateRequestDataAttributes';
import {
    BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSON,
    BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSONTyped,
    BetaAppClipInvocationLocalizationUpdateRequestDataAttributesToJSON,
} from './BetaAppClipInvocationLocalizationUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationLocalizationUpdateRequestData
 */
export interface BetaAppClipInvocationLocalizationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationUpdateRequestData
     */
    type: BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BetaAppClipInvocationLocalizationUpdateRequestDataAttributes}
     * @memberof BetaAppClipInvocationLocalizationUpdateRequestData
     */
    attributes?: BetaAppClipInvocationLocalizationUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum = {
    BetaAppClipInvocationLocalizations: 'betaAppClipInvocationLocalizations'
} as const;
export type BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum = typeof BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum[keyof typeof BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationUpdateRequestData interface.
 */
export function instanceOfBetaAppClipInvocationLocalizationUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BetaAppClipInvocationLocalizationUpdateRequestDataFromJSON(json: any): BetaAppClipInvocationLocalizationUpdateRequestData {
    return BetaAppClipInvocationLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BetaAppClipInvocationLocalizationUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function BetaAppClipInvocationLocalizationUpdateRequestDataToJSON(value?: BetaAppClipInvocationLocalizationUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BetaAppClipInvocationLocalizationUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

