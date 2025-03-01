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
import type { AppStoreReviewDetailAttributes } from './AppStoreReviewDetailAttributes';
import {
    AppStoreReviewDetailAttributesFromJSON,
    AppStoreReviewDetailAttributesFromJSONTyped,
    AppStoreReviewDetailAttributesToJSON,
} from './AppStoreReviewDetailAttributes';

/**
 * 
 * @export
 * @interface BetaAppReviewDetailUpdateRequestData
 */
export interface BetaAppReviewDetailUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaAppReviewDetailUpdateRequestData
     */
    type: BetaAppReviewDetailUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaAppReviewDetailUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppStoreReviewDetailAttributes}
     * @memberof BetaAppReviewDetailUpdateRequestData
     */
    attributes?: AppStoreReviewDetailAttributes;
}


/**
 * @export
 */
export const BetaAppReviewDetailUpdateRequestDataTypeEnum = {
    BetaAppReviewDetails: 'betaAppReviewDetails'
} as const;
export type BetaAppReviewDetailUpdateRequestDataTypeEnum = typeof BetaAppReviewDetailUpdateRequestDataTypeEnum[keyof typeof BetaAppReviewDetailUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaAppReviewDetailUpdateRequestData interface.
 */
export function instanceOfBetaAppReviewDetailUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BetaAppReviewDetailUpdateRequestDataFromJSON(json: any): BetaAppReviewDetailUpdateRequestData {
    return BetaAppReviewDetailUpdateRequestDataFromJSONTyped(json, false);
}

export function BetaAppReviewDetailUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppReviewDetailUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppStoreReviewDetailAttributesFromJSON(json['attributes']),
    };
}

export function BetaAppReviewDetailUpdateRequestDataToJSON(value?: BetaAppReviewDetailUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppStoreReviewDetailAttributesToJSON(value.attributes),
    };
}

