/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AppRelationshipsPricesDataInner } from './AppRelationshipsPricesDataInner';
import {
    AppRelationshipsPricesDataInnerFromJSON,
    AppRelationshipsPricesDataInnerFromJSONTyped,
    AppRelationshipsPricesDataInnerToJSON,
} from './AppRelationshipsPricesDataInner';

/**
 * 
 * @export
 * @interface AppUpdateRequestDataRelationshipsPrices
 */
export interface AppUpdateRequestDataRelationshipsPrices {
    /**
     * 
     * @type {Array<AppRelationshipsPricesDataInner>}
     * @memberof AppUpdateRequestDataRelationshipsPrices
     */
    data?: Array<AppRelationshipsPricesDataInner>;
}

/**
 * Check if a given object implements the AppUpdateRequestDataRelationshipsPrices interface.
 */
export function instanceOfAppUpdateRequestDataRelationshipsPrices(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppUpdateRequestDataRelationshipsPricesFromJSON(json: any): AppUpdateRequestDataRelationshipsPrices {
    return AppUpdateRequestDataRelationshipsPricesFromJSONTyped(json, false);
}

export function AppUpdateRequestDataRelationshipsPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppUpdateRequestDataRelationshipsPrices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppRelationshipsPricesDataInnerFromJSON)),
    };
}

export function AppUpdateRequestDataRelationshipsPricesToJSON(value?: AppUpdateRequestDataRelationshipsPrices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppRelationshipsPricesDataInnerToJSON)),
    };
}

