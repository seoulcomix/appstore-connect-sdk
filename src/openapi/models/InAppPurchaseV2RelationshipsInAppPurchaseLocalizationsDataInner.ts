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
/**
 * 
 * @export
 * @interface InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner
 */
export interface InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner
     */
    type: InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerTypeEnum = {
    InAppPurchaseLocalizations: 'inAppPurchaseLocalizations'
} as const;
export type InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerTypeEnum = typeof InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerTypeEnum[keyof typeof InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner interface.
 */
export function instanceOfInAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerFromJSON(json: any): InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner {
    return InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerFromJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerToJSON(value?: InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

