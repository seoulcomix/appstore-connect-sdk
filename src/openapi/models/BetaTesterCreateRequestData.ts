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
import type { BetaTesterCreateRequestDataAttributes } from './BetaTesterCreateRequestDataAttributes';
import {
    BetaTesterCreateRequestDataAttributesFromJSON,
    BetaTesterCreateRequestDataAttributesFromJSONTyped,
    BetaTesterCreateRequestDataAttributesToJSON,
} from './BetaTesterCreateRequestDataAttributes';
import type { BetaTesterCreateRequestDataRelationships } from './BetaTesterCreateRequestDataRelationships';
import {
    BetaTesterCreateRequestDataRelationshipsFromJSON,
    BetaTesterCreateRequestDataRelationshipsFromJSONTyped,
    BetaTesterCreateRequestDataRelationshipsToJSON,
} from './BetaTesterCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface BetaTesterCreateRequestData
 */
export interface BetaTesterCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaTesterCreateRequestData
     */
    type: BetaTesterCreateRequestDataTypeEnum;
    /**
     * 
     * @type {BetaTesterCreateRequestDataAttributes}
     * @memberof BetaTesterCreateRequestData
     */
    attributes: BetaTesterCreateRequestDataAttributes;
    /**
     * 
     * @type {BetaTesterCreateRequestDataRelationships}
     * @memberof BetaTesterCreateRequestData
     */
    relationships?: BetaTesterCreateRequestDataRelationships;
}


/**
 * @export
 */
export const BetaTesterCreateRequestDataTypeEnum = {
    BetaTesters: 'betaTesters'
} as const;
export type BetaTesterCreateRequestDataTypeEnum = typeof BetaTesterCreateRequestDataTypeEnum[keyof typeof BetaTesterCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaTesterCreateRequestData interface.
 */
export function instanceOfBetaTesterCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function BetaTesterCreateRequestDataFromJSON(json: any): BetaTesterCreateRequestData {
    return BetaTesterCreateRequestDataFromJSONTyped(json, false);
}

export function BetaTesterCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': BetaTesterCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : BetaTesterCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function BetaTesterCreateRequestDataToJSON(value?: BetaTesterCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': BetaTesterCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': BetaTesterCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

