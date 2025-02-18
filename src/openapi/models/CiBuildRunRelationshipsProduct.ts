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
import type { AppRelationshipsCiProductData } from './AppRelationshipsCiProductData';
import {
    AppRelationshipsCiProductDataFromJSON,
    AppRelationshipsCiProductDataFromJSONTyped,
    AppRelationshipsCiProductDataToJSON,
} from './AppRelationshipsCiProductData';

/**
 * 
 * @export
 * @interface CiBuildRunRelationshipsProduct
 */
export interface CiBuildRunRelationshipsProduct {
    /**
     * 
     * @type {AppRelationshipsCiProductData}
     * @memberof CiBuildRunRelationshipsProduct
     */
    data?: AppRelationshipsCiProductData;
}

/**
 * Check if a given object implements the CiBuildRunRelationshipsProduct interface.
 */
export function instanceOfCiBuildRunRelationshipsProduct(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBuildRunRelationshipsProductFromJSON(json: any): CiBuildRunRelationshipsProduct {
    return CiBuildRunRelationshipsProductFromJSONTyped(json, false);
}

export function CiBuildRunRelationshipsProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunRelationshipsProduct {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AppRelationshipsCiProductDataFromJSON(json['data']),
    };
}

export function CiBuildRunRelationshipsProductToJSON(value?: CiBuildRunRelationshipsProduct | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppRelationshipsCiProductDataToJSON(value.data),
    };
}

