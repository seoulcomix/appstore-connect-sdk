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
 * @interface PagingInformationPaging
 */
export interface PagingInformationPaging {
    /**
     * 
     * @type {number}
     * @memberof PagingInformationPaging
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof PagingInformationPaging
     */
    limit: number;
}

/**
 * Check if a given object implements the PagingInformationPaging interface.
 */
export function instanceOfPagingInformationPaging(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "limit" in value;

    return isInstance;
}

export function PagingInformationPagingFromJSON(json: any): PagingInformationPaging {
    return PagingInformationPagingFromJSONTyped(json, false);
}

export function PagingInformationPagingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagingInformationPaging {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': !exists(json, 'total') ? undefined : json['total'],
        'limit': json['limit'],
    };
}

export function PagingInformationPagingToJSON(value?: PagingInformationPaging | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total': value.total,
        'limit': value.limit,
    };
}

