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
import type { MerchantIdCreateRequestDataAttributes } from './MerchantIdCreateRequestDataAttributes';
import {
    MerchantIdCreateRequestDataAttributesFromJSON,
    MerchantIdCreateRequestDataAttributesFromJSONTyped,
    MerchantIdCreateRequestDataAttributesToJSON,
} from './MerchantIdCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface MerchantIdCreateRequestData
 */
export interface MerchantIdCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof MerchantIdCreateRequestData
     */
    type: MerchantIdCreateRequestDataTypeEnum;
    /**
     * 
     * @type {MerchantIdCreateRequestDataAttributes}
     * @memberof MerchantIdCreateRequestData
     */
    attributes: MerchantIdCreateRequestDataAttributes;
}


/**
 * @export
 */
export const MerchantIdCreateRequestDataTypeEnum = {
    MerchantIds: 'merchantIds'
} as const;
export type MerchantIdCreateRequestDataTypeEnum = typeof MerchantIdCreateRequestDataTypeEnum[keyof typeof MerchantIdCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the MerchantIdCreateRequestData interface.
 */
export function instanceOfMerchantIdCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function MerchantIdCreateRequestDataFromJSON(json: any): MerchantIdCreateRequestData {
    return MerchantIdCreateRequestDataFromJSONTyped(json, false);
}

export function MerchantIdCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantIdCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': MerchantIdCreateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function MerchantIdCreateRequestDataToJSON(value?: MerchantIdCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': MerchantIdCreateRequestDataAttributesToJSON(value.attributes),
    };
}

