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
import type { BundleIdUpdateRequestDataAttributes } from './BundleIdUpdateRequestDataAttributes';
import {
    BundleIdUpdateRequestDataAttributesFromJSON,
    BundleIdUpdateRequestDataAttributesFromJSONTyped,
    BundleIdUpdateRequestDataAttributesToJSON,
} from './BundleIdUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface MerchantIdUpdateRequestData
 */
export interface MerchantIdUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof MerchantIdUpdateRequestData
     */
    type: MerchantIdUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof MerchantIdUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BundleIdUpdateRequestDataAttributes}
     * @memberof MerchantIdUpdateRequestData
     */
    attributes?: BundleIdUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const MerchantIdUpdateRequestDataTypeEnum = {
    MerchantIds: 'merchantIds'
} as const;
export type MerchantIdUpdateRequestDataTypeEnum = typeof MerchantIdUpdateRequestDataTypeEnum[keyof typeof MerchantIdUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the MerchantIdUpdateRequestData interface.
 */
export function instanceOfMerchantIdUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function MerchantIdUpdateRequestDataFromJSON(json: any): MerchantIdUpdateRequestData {
    return MerchantIdUpdateRequestDataFromJSONTyped(json, false);
}

export function MerchantIdUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantIdUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BundleIdUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function MerchantIdUpdateRequestDataToJSON(value?: MerchantIdUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BundleIdUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

